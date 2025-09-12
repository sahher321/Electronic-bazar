import React from "react";
import Image from "../SmallComponent/Image";
import Rating from "../SmallComponent/Rating";

const ProductWeekCard = ({ image, name, price, oldPrice, rating, sold }) => {
  return (
    <div className="h-[450px] flex flex-col gap-2 bg-white rounded-3xl my-5 w-full">
      <div className="h-[65%] w-full rounded-3xl">
        <img src={image} className="object-cover rounded-3xl h-full w-full" />
      </div>
      <div className="p-4 flex flex-col h-[35%] justify-between">
        <div>
          <h3 className="text-lg font-semibold text-black">{name} </h3>
          <p className="text-gray-400 text-xs">${sold} sold</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-[#FF7020] font-bold text-base">${price}</p>
            <p className="text-gray-400 line-through text-xs">${oldPrice}</p>
          </div>
          <Rating rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default ProductWeekCard;
