import React from "react";
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar() {
  const quantity = useSelector((state) => state.quantity);

  return (
    <div className="h-20 bg-black flex">
      <img
        src={logo}
        alt="logo"
        srcset=""
        className="w-20 mx-auto justify-center items-center"
      />
      <FaShoppingCart className="text-white my-8 text-xl" />
      <span className="text-white my-4">{quantity}</span>
    </div>
  );
}

export default Navbar;
