import React from "react";
import { dot, letter } from "../../assets";
import Image from "../SmallComponent/Image";

const NewsLetter = () => {
  return (
    <div className="bg-[#FF7020] py-15 ">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-5">
        <Image image={letter} width="100px" height="82px" />
        <div className="flex flex-col gap-5 w-full lg:w-[40%] ">
          <div className="relative  ">
            <p className="text-base sm:text-2xl font-semibold text-white relative z-10">
              Sign Up for Newsletter
            </p>
            <div className="lg:block hidden absolute -top-4 right-[162px] w-12 h-12 z-0 opacity-40">
              <Image image={dot} width="w-full" height="h-full" />
            </div>
          </div>

          <p className="text-xs sm:text-base font-normal text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-full lg:w-[43%] h-[60px] rounded-xl bg-white relative">
          <input
            type="text"
            placeholder="Enter your email year"
            className="w-full h-full rounded-xl pr-[120px] pl-4 sm:text-base text-xs"
          />
          <button className="text-xs sm:text-base font-semibold text-white absolute top-1/2 -translate-y-1/2 right-1 bg-[#565656] px-4 sm:px-7 py-3 rounded-lg cursor-pointer z-10">
            SUBSCRIBE
          </button>
          <div className="absolute lg:block hidden w-[48px] h-[48px] top-[40px] right-[-20px] z-0 opacity-40">
            <Image image={dot} width="w-full" height="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
