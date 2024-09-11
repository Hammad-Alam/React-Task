import React, { useState } from "react";
import ProductData from "../helpers/ProductData";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function ProductPreview() {
  const [feature, setFeature] = useState("heartRate");
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const updateFeature = (feature) => {
    setFeature(feature);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-1/2 mx-auto justify-center items-center">
        <div className="relative">
          <img
            src={ProductData.colorOptions[selectedColorIndex].imageUrl}
            alt={ProductData.title}
            className="my-5 md:h-[250px] md:my-28 md:ml-10 lg:ml-16 xl:ml-48 xl:mt-40"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            {feature === "heartRate" ? (
              <div className="lg:ml-44">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-base lg:text-2xl text-red-500"
                />
                <br />
                <span className="text-base lg:text-xl text-white">78</span>
              </div>
            ) : (
              <span className="lg:text-xl lg:ml-44 text-white">
                {new Date().getHours()}:{new Date().getMinutes()}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mx-10 md:mx-16 my-0 md:my-16">
        <h1 className="font-bold text-4xl text-center md:text-left">
          {ProductData.title}
        </h1>
        <p className="text-justify my-4 md:w-3/4">{ProductData.description}</p>
        <h3 className="font-bold text-xl mb-4">Select Color</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 md:mr-[200px] lg:mr-[300px]">
          {ProductData.colorOptions.map((colorOption, index) => (
            <img
              key={index}
              src={colorOption.imageUrl}
              alt={colorOption.styleName}
              className={`w-40 cursor-pointer ${
                index === selectedColorIndex
                  ? "ring-4 ring-red-500 rounded-lg"
                  : ""
              }`}
              onClick={() => setSelectedColorIndex(index)}
            />
          ))}
        </div>
        <h3 className="font-bold text-xl mb-4">Features</h3>
        <div className="space-x-5">
          <Button text="Time" onClick={() => updateFeature("time")} />
          <Button
            text="Heart Rate"
            onClick={() => updateFeature("heartRate")}
          />
        </div>
        <button className="px-4 py-2 text-white bg-[#2D2F31] rounded-lg font-bold">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductPreview;
