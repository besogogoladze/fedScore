import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const Layout = ({ children }) => {
  const location = useLocation();

  const showHeader =
    location.pathname !== "/" && location.pathname !== "/fedScore";

  return (
    <>
      {showHeader && <Header />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
