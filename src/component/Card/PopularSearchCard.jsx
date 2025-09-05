import React from "react";

import { FaStar } from "react-icons/fa";
import Image from "../SmallComponent/Image";

const PopularSearchCard = ({ image, name, price, oldPrice, rating, sold }) => {
  const fullStars = Math.floor(rating);
  return (
    <div className="w-[270px] 2xl:w-[280px] h-[450px] flex flex-col gap-2 shadow-lg bg-white rounded-3xl my-5 ">
      <div className="h-[65%]">
        <Image
          width="100%"
          height="100%"
          image={image}
          borderRadius="rounded-3xl"
        />
      </div>
      <div className="p-4 flex flex-col text-center gap-2">
        <p className="text-[#FF7020] font-bold text-base">${price}</p>
        <p className="text-gray-400 line-through text-xs">${oldPrice}</p>
        <h3 className="text-lg font-semibold text-black mb-1">{name}</h3>
      </div>
    </div>
  );
};

export default PopularSearchCard;
