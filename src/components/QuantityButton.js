import React from "react";

function quantityButton(props) {
  return (
    <button
      className="px-4 py-2 text-white bg-[#2D2F31] rounded-lg font-bold"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default quantityButton;
