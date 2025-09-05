import React from "react";

const Button = ({
  background,
  color,
  text,
  hoverbg,
  hoverColor,
  borderColor,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`font-medium py-2 px-3 sm:py-3 sm:px-6 rounded-lg text-sm sm:text-base cursor-pointer  transition-all duration-300 lato`}
      style={{
        backgroundColor: background,
        color: color,
        borderColor: borderColor,
        borderWidth: "1px",
        borderStyle: "solid",
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = hoverbg;
        e.target.style.color = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = background;
        e.target.style.color = color;
      }}
    >
      {text}
    </button>
  );
};

export default Button;
