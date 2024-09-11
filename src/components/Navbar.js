import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="h-20 bg-black">
      <img
        src={logo}
        alt="logo"
        srcset=""
        className="w-20 mx-auto justify-center items-center"
      />
    </div>
  );
}

export default Navbar;
