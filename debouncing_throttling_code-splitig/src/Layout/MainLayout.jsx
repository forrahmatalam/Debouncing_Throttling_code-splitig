import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router";


const MainLayout = () => {
  return (
    <div>
      <NavLink to="/">App</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <Outlet />
    </div>
  );
};

export default MainLayout;