import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "../SmallComponent/Image";

const PopularCard = ({ image, name, rating, price, oldPrice, sold }) => {
  const fullStars = Math.floor(rating);
  return (
    <div className="w-[350px] h-[450px] flex flex-col gap-2 shadow-lg bg-white rounded-3xl my-5">
      <div className="h-[65%]">
        <Image
          width="100%"
          height="100%"
          image={image}
          borderRadius="rounded-3xl"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-black mb-1">{name}</h3>
          <p className="text-sm font-medium mb-2">{sold} sold</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <p className="text-[#FF7020] font-bold text-sm">${price}</p>
            <p className="text-gray-400 line-through text-xs">${oldPrice}</p>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < fullStars ? "text-orange-500" : "text-gray-300"
                }
                size={12}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
