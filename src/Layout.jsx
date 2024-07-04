import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import App from "./App";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <Header />
      {/* <App /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
