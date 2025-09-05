import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import HotSaleCard from "../Card/HotSaleCard";
import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../SmallComponent/Image";
import { hotdeal } from "../../assets";

const HotDeal = ({ data }) => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };
  return (
    <div className="py-12">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex  gap-2">
            <Image image={hotdeal} width="27px" height="31px" />
            <h1 className="text-xl sm:text-3xl font-semibold ">Hot Sale!</h1>
          </div>
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
            <div key={item.id} className="!w-[270px] px-2">
              <HotSaleCard {...item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HotDeal;
