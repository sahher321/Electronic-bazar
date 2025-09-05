import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestDealCard from "../Card/BestDealCard";

const RecentlyViewed = ({ data }) => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // ← THIS disables default arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="py-12">
      <div className="container flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-3xl font-semibold ">
            Recently viewed
          </h1>
          <div className="flex gap-4">
            <button
              className=" p-2 text-[#949494] hover:text-[#FF7020] cursor-pointer"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <MdKeyboardArrowLeft size={24} />
            </button>
            <button
              className=" p-2 text-[#949494] hover:text-[#FF7020] cursor-pointer "
              onClick={() => sliderRef.current.slickNext()}
            >
              <MdKeyboardArrowRight size={24} />
            </button>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {data.map((item) => (
            <div key={item.id} className="px-2">
              <BestDealCard {...item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecentlyViewed;
