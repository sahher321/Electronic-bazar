import React from "react";

const Image = ({ width, height, image, borderRadius }) => {
  return (
    <div
      style={{ width, height }}
      className={`overflow-hidden ${borderRadius}`}
    >
      <img
        src={image}
        alt=""
        className={`w-full h-full object-cover ${borderRadius}`}
      />
    </div>
  );
};

export default Image;
