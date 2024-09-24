import React, { useState, useEffect } from "react";
import ProductData from "../helpers/ProductData";
import Heading from "../components/Heading";
import Button from "../components/Button";
import QuantityButton from "../components/QuantityButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

function ProductPreview() {
  const [feature, setFeature] = useState("heartRate");
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [disable, setDisable] = useState(true);

  const updateFeature = (feature) => {
    setFeature(feature);
  };

  const { quantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const { addQuantity, subtractQuantity } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    setDisable(quantity === 0);
  }, [quantity]);

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
        <Heading heading="Select Color" />
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
        <Heading heading="Price: RS.6000" />
        <Heading heading="Features" />
        <div className="space-x-5">
          <Button text="Time" onClick={() => updateFeature("time")} />
          <Button
            text="Heart Rate"
            onClick={() => updateFeature("heartRate")}
          />
        </div>
        <div className="mb-4">
          {disable ? (
            <QuantityButton
              text="-"
              onClick={() => subtractQuantity(1)}
              disabled={disable}
            />
          ) : (
            <QuantityButton text="-" onClick={() => subtractQuantity(1)} />
          )}
          <span className="px-5">Quantity ({quantity})</span>
          <QuantityButton text="+" onClick={() => addQuantity(1)} />
          <br />
        </div>
      </div>
    </div>
  );
}

export default ProductPreview;
