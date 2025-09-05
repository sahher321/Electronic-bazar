import React from "react";
import Slider from "react-slick";
import { placeholder } from "../../assets";

const slides = [
  {
    title: "Fill your desk full of technology",
    price: "$45.00",
    description: "HOT PRODUCTS",
    image: placeholder,
  },
  {
    title: "Fill your desk full of technology",
    price: "$45.00",
    description: "HOT PRODUCTS",
    image: placeholder,
  },
  {
    title: "Fill your desk full of technology",
    price: "$45.00",
    description: "HOT PRODUCTS",
    image: placeholder,
  },
];

const SliderImage = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    centerMode: true,
    slidesToShow: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <div className="w-full  h-[450px] mx-auto">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-5">
              <div className="slick-slide-inner rounded-2xl bg-[#EFEFEF] mx-auto">
                <div className="flex flex-col h-full p-8 md:p-14 shadow-md">
                  <div className=" w-full md:w-[70%] lg:w-[50%]">
                    <p className="text-sm lg:text-base text-[#898989] uppercase mb-2">
                      {slide.description}
                    </p>
                    <h2 className="text-2xl lg:text-4xl lg:leading-[50px] font-bold mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-orange-500 text-base lg:text-lg font-semibold mb-4">
                      Start from {slide.price}
                    </p>
                    <button className="bg-[#343434] text-white  lg:px-6 lg:py-4 px-3 py-2 rounded-md hover:bg-gray-800 transition-all lato cursor-pointer uppercase text-xs lg:text-base">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderImage;
