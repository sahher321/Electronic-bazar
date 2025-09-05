import React from "react";
import Image from "../SmallComponent/Image";

const SmallCard = ({ image, text, para, className }) => {
  return (
    <div className="border border-[#E7E7E7] relative h-[120px] flex flex-col items-center justify-center rounded-2xl">
      <div
        className={`absolute top-[-25px] left-1/2 transform -translate-x-1/2 ${className}`}
      >
        <Image width="100%" height="100%" image={image} />
      </div>
      <h1 className="text-lg font-semibold text-center text-black">{text}</h1>
      <p className=" text-sm font-light text-center text-black">{para}</p>
    </div>
  );
};

export default SmallCard;
