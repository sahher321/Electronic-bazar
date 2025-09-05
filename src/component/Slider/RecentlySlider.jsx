import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestDealCard from "../Card/BestDealCard";

const RecentlySlider = () => {
  const sliderRef = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-12">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold mb-5">Recently viewed</h1>
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

        <Slider ref={sliderRef} {...settings} style={{}}>
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

export default RecentlySlider;
