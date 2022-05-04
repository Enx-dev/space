import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Container } from "../components";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
