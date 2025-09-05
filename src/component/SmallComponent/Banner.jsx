import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#F0F0F1] w-full h-[200px] sm:h-[350px] rounded-2xl p-4 sm:p-8">
      <div className="w-[100%] sm:w-[80%] md:w-[50%] flex flex-col justify-evenly h-full">
        <p className="text-xs sm:text-sm text-[#898989] mb-2">
          MOST VIEWED CATEGORY
        </p>
        <h1 className="text-xl sm:text-4xl font-bold text-black mb-4">
          Laptop & Computers Category
        </h1>
        <p className="text-xs sm:text-base text-[#3D3D3D]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
    </div>
  );
};

export default Banner;
