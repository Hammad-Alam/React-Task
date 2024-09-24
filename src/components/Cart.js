import React from "react";
import ProductData from "../helpers/ProductData";
import { useSelector } from "react-redux";

function Cart() {
  const { quantity, price } = useSelector((state) => state.cart);

  return (
    <div className="border-4 border-black h-80 md:w-1/2 md:ml-auto lg:h-96 lg:w-1/2 xxl:w-1/3 rounded-b-xl">
      <h1 className="py-4 px-8 text-3xl font-bold border-b-2 border-b-gray-300">
        Cart
      </h1>
      <div className="flex flex-wrap py-8 px-3 border-b-2 border-b-gray-300 md:flex-nowrap xxl:px-4">
        <img
          src={ProductData.colorOptions[0].imageUrl}
          alt={ProductData.title}
          className="w-1/3 md:w-1/4 lg:w-1/5 xxl:w-1/4"
        />
        <div className="py-6 md:py-6 md:ml-8 lg:ml-8">
          <h1 className="font-bold text-xl ">{ProductData.title}</h1>
          <span>Quantity: {quantity}</span>
        </div>
        <h1 className="pl-10 py-10 font-semibold md:pl-10 lg:pl-28 xl:pl-36">
          RS. 6000
        </h1>
      </div>
      <div className="flex justify-end py-4 px-8 text-xl font-bold md:py-6 lg:py-8 xl:py-10">
        <h1>SubTotal: RS.{price}</h1>
      </div>
    </div>
  );
}

export default Cart;
