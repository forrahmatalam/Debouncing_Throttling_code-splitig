import React from "react";
import { lazy ,Suspense  } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../Layout/MainLayout";
let About =lazy(()=>import("../About/About"))
let Contacts =lazy(()=>import("../About/Contacts"))





const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <App />,
        },
        {
          path: "about",
          element: (<Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>),
        },
        {
          path: "contacts",
          element: (
            
            <Suspense fallback={<h1>Loading...</h1>}><Contacts /></Suspense>),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;