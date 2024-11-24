import Navbar from "../../components/navbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div>{children}</div>
    </main>
  );
};

export default Layout;
