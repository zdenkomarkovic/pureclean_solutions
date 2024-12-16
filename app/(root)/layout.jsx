import Navbar from "../../components/navbar/page";
import React from "react";
import Footer from "../../components/footer/page";

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
