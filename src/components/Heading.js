import React from "react";

function Heading(props) {
  return (
    <div>
      <h3 className="font-bold text-xl mb-4">{props.heading}</h3>
    </div>
  );
}

export default Heading;
