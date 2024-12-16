import React from "react";

const Button = ({ text, onClick, type = "button", className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
