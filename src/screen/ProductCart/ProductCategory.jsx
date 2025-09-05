import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Banner,
  BestDealCard,
  CategorySidebar,
  Image,
  NewsLetter,
  RecentlyViewed,
} from "../../component";
import { laptop } from "../../assets";
import { FaTruck, FaStar } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import HotDeal from "../../component/Section/HotDeal";

const ProductCategory = () => {
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
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <div className="py-15">
      <div className="container ">
        <div className="flex flex-row gap-5">
          <div className="flex basis-[25%] flex-col gap-3">
            <CategorySidebar />
            <div className="flex flex-col gap-3">
              <div className="w-full border border-[#D3D3D3] flex p-7 justify-between items-center rounded-xl">
                <FaTruck className="text-[#C7C7C7] text-6xl" />
                <div>
                  <h1 className="text-lg font-medium text-black">
                    Free Delivery
                  </h1>
                  <p className="text-base font-light text-black">from $40</p>
                </div>
              </div>
              <div className="w-full border border-[#D3D3D3] flex p-7 justify-between items-center rounded-xl">
                <FaStar className="text-[#C7C7C7] text-6xl" />
                <div>
                  <h1 className="text-lg font-medium text-black">
                    Best Quality
                  </h1>
                  <p className="text-base font-light text-black">Brand</p>
                </div>
              </div>

              <div className="w-full border border-[#D3D3D3] flex p-7 justify-between items-center rounded-xl">
                <FaTruck className="text-[#C7C7C7] text-6xl" />
                <div>
                  <h1 className="text-lg font-medium text-black">1 Year</h1>
                  <p className="text-base font-light text-black">
                    for free Return
                  </p>
                </div>
              </div>
              <div className="w-full border border-[#D3D3D3] flex p-7 justify-between items-center rounded-xl">
                <FaTruck className="text-[#C7C7C7] text-6xl" />
                <div>
                  <h1 className="text-lg font-medium text-black">Feedback</h1>
                  <p className="text-base font-light text-black">
                    99% Real Data
                  </p>
                </div>
              </div>
              <div className="w-full border border-[#D3D3D3] flex p-7 justify-between items-center rounded-xl">
                <FaTruck className="text-[#C7C7C7] text-6xl" />
                <div>
                  <h1 className="text-lg font-medium text-black">Payment</h1>
                  <p className="text-base font-light text-black">Secure</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex basis-[75%] flex-col overflow-hidden">
            <Banner />
            <div className="grid grid-cols-3 py-10 gap-5">
              <Card text="Laptop" />
              <Card text="Ultra book" />
              <Card text="Desktop/PC" />
              <Card text="All in One PC" />
              <Card text="Routers" />
              <Card text="Speakers" />
            </div>

            <div className="py-12 flex flex-col gap-10">
              <div className="flex justify-between items-center ">
                <h1 className="text-3xl font-semibold mb-5">
                  Best Offer in Laptops
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
                  <div key={item.id} className="pl-3">
                    <BestDealCard {...item} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <HotDeal data={data} />
        <RecentlyViewed data={data} />
      </div>
      <NewsLetter />
    </div>
  );
};

export default ProductCategory;

export const Card = ({ text }) => {
  return (
    <div className="bg-[#F0F0F1] w-full h-[130px] rounded-4xl flex items-center gap-5 px-5">
      <Image image={laptop} width="65px" height="51px" />
      <div>
        <p className="text-lg font-semibold text-black">{text}</p>
        <p className="text-sm font-medium text-black">24 Products</p>
      </div>
    </div>
  );
};
