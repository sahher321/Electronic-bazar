import { FaStar } from "react-icons/fa";
import Image from "../SmallComponent/Image";
import React from "react";
import { placeholder } from "../../assets";
import Button from "../SmallComponent/Button";

const HotSaleCard = ({ image, name, rating, price, oldPrice, sold, stock }) => {
  return (
    <div className="!w-full h-[500px] flex flex-col shadow-lg bg-white rounded-2xl my-5 relative overflow-hidden">
      <div className="w-[70px] h-[60px] bg-[#FF7020] rounded-full absolute top-4 right-4 flex items-center justify-center z-10">
        <p className="lato font-semibold text-base text-white">SALE</p>
      </div>
      <div className="h-[50%]">
        <Image
          width="100%"
          height="100%"
          image={image}
          borderRadius="rounded-2xl"
        />
      </div>

      <div className="h-[50%] p-4 flex flex-col justify-between text-center">
        <div>
          <p className="text-gray-400 line-through text-xs">${oldPrice}</p>

          <p className="text-[#FF7020] font-bold text-base">${price}</p>
        </div>

        <h3 className="text-lg font-semibold text-black leading-tight h-[48px] overflow-hidden">
          {name}
        </h3>

        <div className="w-full">
          <input
            type="range"
            min="0"
            max="100"
            value={stock}
            disabled
            className="w-full h-2 bg-[#FF7020] rounded-lg appearance-none cursor-default
        [&::-webkit-slider-thumb]:hidden [&::-moz-range-thumb]:hidden"
          />
          <p className="text-gray-400 text-xs lato mt-1">{stock} Left Stock</p>
        </div>

        <Button
          text="Add to Cart"
          background="#FFFFFF"
          color="#FF7020"
          hoverbg="#FF7020"
          hoverColor="#FFFFFF"
          borderColor="#FF7020"
        />
      </div>
    </div>
  );
};

export default HotSaleCard;
