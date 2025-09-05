import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BestDealCard,
  PopularSearchCard,
  SliderImage,
  ProductWeekCard,
  SmallCardSection,
  RecentlyViewed,
  NewsLetter,
} from "../../component";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import HotDeal from "../../component/Section/HotDeal";

const Home = () => {
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

  const settingSecond = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

  return (
    <>
      <div className="py-12">
        <SliderImage />
      </div>
      <div className="py-12">
        <div className="container">
          <h1 className="text-3xl font-semibold mb-5">Best Deals</h1>

          <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
            {data.map((item, index) => (
              <BestDealCard
                key={index}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                rating={item.rating}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="py-12 bg-[#F6F6F6] xl:bg-amber-400 lg:bg-black  2xl:bg-red-500">
        <div className="flex gap-6">
          <div className="w-[25%] 2xl:w-[15%] flex flex-col justify-center gap-4 ml-12">
            <h2 className="text-2xl font-semibold mb-4 ">
              Top 10 Selected Products On the Week
            </h2>
            <div className="flex gap-2">
              <button
                className="group bg-[#FFFFFF] p-2 rounded-full border border-[#00000029] hover:border-[#000000] cursor-pointer"
                onClick={() => sliderRef.current?.slickPrev()}
              >
                <MdKeyboardArrowLeft
                  size={24}
                  className="text-[#00000029] group-hover:text-[#000000]"
                />
              </button>

              <button
                className="group bg-[#FFFFFF] p-2 rounded-full border border-[#00000029] hover:border-[#000000] cursor-pointer"
                onClick={() => sliderRef.current?.slickPrev()}
              >
                <MdKeyboardArrowRight
                  size={24}
                  className="text-[#00000029] group-hover:text-[#000000]"
                />
              </button>
            </div>
          </div>

          <Slider {...settingSecond} ref={sliderRef} className="slider">
            {data.map((item) => (
              <div key={item.id} className="p-2 ">
                <ProductWeekCard {...item} />
              </div>
            ))}
          </Slider>
        </div>
      </div> */}
      <div className="py-12 ">
        <div className="container">
          <div className="flex justify-between items-center">
            <h1 className="text-xl sm:text-3xl font-semibold ">
              Popular Searches
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
              <div
                key={item.id}
                className="!w-full sm:!w-1/2 md:!w-1/3 lg:!w-1/4 xl:!w-[280px] 2xl:!w-1/4 px-2"
              >
                <PopularSearchCard {...item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <SmallCardSection />

      <HotDeal data={data} />

      <RecentlyViewed data={data} />

      <NewsLetter />
    </>
  );
};

export default Home;
