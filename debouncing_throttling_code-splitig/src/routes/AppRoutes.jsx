import React, { lazy, Suspense } from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router";

import App from "../App";
import MainLayout from "../Layout/MainLayout";

const About = lazy(() => import("../About/About"));
const Contacts = lazy(() => import("../About/Contacts"));

// Loader
const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
};

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,

      children: [
        {
          index: true,
          element: <App />,
        },

        {
          path: "about",
          loader: getUsers,
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <About />
            </Suspense>
          ),
        },

        {
          path: "contacts",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Contacts />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;