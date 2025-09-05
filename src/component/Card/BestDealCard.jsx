import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "../SmallComponent/Image";
import Rating from "../SmallComponent/Rating";

const BestDealCard = ({ image, name, rating, price, quantity, className }) => {
  return (
    <div
      className={`w-full h-[140px] flex gap-3 mb-5 shadow rounded-[20px] p-2 ${className}`}
    >
      <Image
        width="45%"
        height="100%"
        image={image}
        borderRadius="rounded-[20px]"
      />

      <div className="flex flex-col justify-between w-[55%]  ">
        <h3 className="text-sm font-medium ">{name}</h3>

        <div>
          <p className="text-orange-500 text-sm font-bold mb-3">${price}</p>

          <div className="flex items-center gap-1">
            <Rating rating={rating} />

            <span className="text-gray-400 text-xs">({quantity})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDealCard;
