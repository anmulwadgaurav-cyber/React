import React from "react";

const Button = (props) => {
  return (
    <button
      className={`bg-blue-600 text-white px-5 py-2.5 rounded cursor-pointer hover:bg-blue-700 transition-all ease-in duration-100 shadow-md active:scale-95`}
    >
      {props.text}
    </button>
  );
};

export default Button;
