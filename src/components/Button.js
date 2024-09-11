import React from "react";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="bg-gray-200 px-5 lg:px-10 py-2 mb-4 font-bold text-lg rounded-lg hover:bg-gray-300 hover:text-white"
    >
      {props.text}
    </button>
  );
}

export default Button;
