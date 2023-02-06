import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <header><Navbar/></header>
      <main className="overflow-hidden">{children}</main>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node
};

