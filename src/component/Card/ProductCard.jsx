import React from "react";
import Image from "../SmallComponent/Image";
import Rating from "../SmallComponent/Rating";
import { placeholder } from "../../assets";
import Button from "../SmallComponent/Button";

const ProductCard = () => {
  const rating = 4.5;
  return (
    <div className="w-full h-[400px] flex flex-col gap-2 shadow-lg bg-white rounded-3xl my-5 ">
      <div className="h-[50%] w-full rounded-t-3xl ">
        <img
          src={placeholder}
          alt=""
          className="object-cover rounded-t-3xl h-full w-full"
        />
      </div>

      <div className="p-4 flex flex-col h-[50%] justify-between">
        <h3 className="text-base font-medium text-black ">
          Makbook Pro 2020 With 260 SSD
        </h3>

        <div className="flex items-center justify-between">
          <p className="text-[#FF7020] font-bold text-base">$33.3</p>
          <div className="flex items-center gap-1">
            <Rating rating={rating} />
            <p className="text-sm text-[#BABABA]">(12)</p>
          </div>
        </div>

        <Button
          borderColor="#FF7020"
          background="#FFFFFF"
          color="#FF7020"
          text="ADD TO CART"
          hoverbg="#FF7020"
          hoverColor="#FFFFFF"
        />
      </div>
    </div>
  );
};

export default ProductCard;
