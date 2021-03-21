import React from "react";

function Btn({ text, bgColor, textColor, extraClass }) {
  return (
    <button className={`${bgColor} ${textColor} ${extraClass} py-2 px-5 rounded hover:bg-opacity-80`}>{text}</button>
  );
}

export default Btn;
