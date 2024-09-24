import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import Cart from "./Cart";

function Navbar() {
  const { quantity } = useSelector((state) => state.cart);
  const [isCartOpen, setIsCartOpen] = useState(false); // Create state for cart visibility

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen && quantity > 0); // Toggle cart visibility
  };

  return (
    <div>
      <div className="h-20 bg-black flex">
        <img
          src={logo}
          alt="logo"
          srcset=""
          className="w-20 mx-auto justify-center items-center"
        />
        {quantity === 0 ? (
          <FaShoppingCart
            className="text-white my-8 text-xl"
            onClick={handleCartClick}
          />
        ) : (
          <FaShoppingCart
            className="text-white my-8 text-xl cursor-pointer"
            onClick={handleCartClick}
          />
        )}
        <span className="text-white my-4">{quantity}</span>
      </div>
      {isCartOpen && <Cart />}
    </div>
  );
}

export default Navbar;
