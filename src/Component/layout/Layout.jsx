import React from "react";
import Navbar from "../navbar/Navbar";
import Fotter from "../fotter/Fotter";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      <Fotter />
    </div>
  );
}

export default Layout;
