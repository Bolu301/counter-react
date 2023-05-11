import React from "react";

const Button = ({ btnLabel, onClick }) => {
  return (
    <button className="bg-blue-400 text-white px-9 py-4 m-4" onClick={onClick}>
      {btnLabel}
    </button>
  );
};

export default Button;
