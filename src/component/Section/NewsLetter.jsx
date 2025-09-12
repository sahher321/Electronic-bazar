import React from "react";
import { dot, letter } from "../../assets";
import Image from "../SmallComponent/Image";

const NewsLetter = () => {
  return (
    <section className="bg-[#FF7020] py-10 sm:py-16">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
        
        {/* Illustration */}
        <div className="flex-shrink-0">
          <Image image={letter} width="100px" height="82px" alt="Newsletter Icon" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-4 w-full lg:w-[40%] text-center lg:text-left relative">
          <h2 className="text-lg sm:text-2xl font-semibold text-white relative z-10">
            Sign Up for Newsletter
          </h2>
          <div className="hidden lg:block absolute -top-2 -right-10 w-12 h-12 z-0 opacity-40">
            <Image image={dot} alt="decorative dot" />
          </div>
          <p className="text-xs sm:text-base font-normal text-white leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Input & Button */}
        <div className="w-full lg:w-[43%] relative">
          <div className="h-[56px] sm:h-[60px] rounded-xl bg-white flex items-center px-2 sm:px-4 relative">
            <input
              type="email"
              aria-label="Email Address"
              placeholder="Enter your email here"
              className="flex-1 h-full rounded-xl px-3 sm:px-4 text-xs sm:text-base focus:outline-none"
            />
            <button
              type="button"
              className="text-xs sm:text-base font-semibold text-white bg-[#565656] px-4 sm:px-7 py-2 sm:py-3 rounded-lg ml-2 hover:bg-black transition"
            >
              SUBSCRIBE
            </button>
          </div>
          <div className="hidden lg:block absolute w-12 h-12 top-[60%] right-[-20px] z-0 opacity-40">
            <Image image={dot} alt="decorative dot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
