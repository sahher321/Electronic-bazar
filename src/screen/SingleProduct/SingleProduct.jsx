import React, { useEffect, useState } from "react";
import { Image, ProductGallery, Button, Rating } from "../../component";
import { FaStar, FaEye, FaHeart, FaStarHalfAlt } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { company, placeholder } from "../../assets";

const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];
const SingleProduct = () => {
  const rating = 5;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectSize, setSelectSize] = useState(""); // or null
  const size = ["14-Inch", "24-Inch", "32-Inch", "60-Inch"];

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
  const fullStars = Math.floor(data.rating);
  return (
    <>
      <div className="py-12">
        <div className="container flex lg:flex-row flex-col">
          <div className="w-full lg:w-[50%]">
            <ProductGallery images={images} />
          </div>

          <div className="w-full lg:w-[50%] lg:pl-7">
            <p className="2xl:text-base text-xs sm:text-sm font-normal text-[#4D4D4D] mb-2">
              SKU 12314124124
            </p>
            <h1 className="2xl:text-2xl sm:text-xl text-lg font-semibold text-black mb-2">
              LED Monitor With High Quality In The World
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center flex-col sm:flex-row gap-1 border-r border-[#F2F2F2] pr-3">
                  <p className="2xl:text-base text-xs sm:text-sm text-[#FF7020]">
                    4.0
                  </p>
                  <Rating rating={rating} margin="mb-1" />
                  <p className="2xl:text-sm text-xs font-normal text-[#4D4D4D] lato ">
                    (223)
                  </p>
                </div>
                <p className="flex items-center flex-col sm:flex-row gap-1 lato 2xl:text-base text-xs sm:text-sm font-medium px-3 border-r border-[#F2F2F2] text-center sm:text-left">
                  <IoMdCheckmark className="text-[#BABABA] font-extrabold" />
                  4,320 Sold
                </p>
                <p className="flex items-center flex-col sm:flex-row gap-1 lato 2xl:text-base text-xs sm:text-sm font-medium px-3 text-center sm:text-left">
                  <FaEye className="text-[#BABABA] font-extrabold" />
                  1.4k Viewed
                </p>
              </div>
              <div>
                <p className="2xl:text-base lato text-xs sm:text-sm font-semibold text-[#FF7020] flex items-center flex-col sm:flex-row w-full gap-3 text-center sm:text-left">
                  <FaHeart className="text-[#BABABA] font-extrabold" />
                  Add to wishlist
                </p>
              </div>
            </div>

            <div className="flex sm:items-center justify-between sm:flex-row flex-col sm:gap-0 gap-2 border-b border-[#8D8D8D] py-7">
              <p className="2xl:text-4xl text-2xl font-semibold text-[#FF7020] flex items-center ">
                $976.33
                <span className="2xl:text-xl text-base font-light line-through text-[#8D8D8D] mx-2">
                  $1029.99
                </span>
                <span className="text-sm text-white px-2 py-0.5 bg-[#3AB137] rounded-md">
                  20%
                </span>
              </p>
              <Image image={company} width="122px" height="42px" />
            </div>
            <p className="2xl:text-lg md:text-base text-sm 2xl:leading-[30px] leading-[25px] font-normal py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <ul>
              <li className="2xl:text-lg md:text-base text-sm font-normal pb-2">
                - Direct Full Array
              </li>
              <li className="2xl:text-lg md:text-base text-sm font-normal pb-2">
                - Quantum Dot Technology
              </li>
              <li className="2xl:text-lg md:text-base text-sm font-normal pb-2">
                - Ambient Mode
              </li>
              <li className="2xl:text-lg md:text-base text-sm font-normal pb-2">
                -- One Remote Control
              </li>
            </ul>

            <div className="flex sm:items-center justify-between flex-col sm:flex-row  pt-2">
              <p className="2xl:text-lg text-base font-medium mb-2">
                Screen Size
              </p>
              <div className="flex gap-2">
                {size.map((size) => (
                  <button
                    key={size}
                    className={`font-medium py-2 px-2 sm:py-2 sm:px-6 rounded-lg text-xs sm:text-base cursor-pointer  transition-all duration-300 lato text-[#FF7020]
                ${
                  selectSize.includes(size)
                    ? "bg-[#FF702026] border border-none "
                    : "bg-white border border-[#FFEADE] "
                }`}
                    onClick={() => setSelectSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between py-5">
              <div className="font-medium py-2 px-3 sm:py-3 sm:px-6  rounded-lg text-base cursor-pointer border border-[#D8D8D8] flex gap-4 sm:gap-8">
                <button className="text-[#D2D2D2] text-lg">+</button>
                <p className="text-[#FF7020] text-lg ">1</p>
                <button className="text-[#D2D2D2] text-lg">-</button>
              </div>

              <div className="flex gap-4">
                <Button
                  borderColor="#FF7020"
                  background="#FFFFFF"
                  color="#FF7020"
                  text="BUY"
                  hoverbg="#FF7020"
                  hoverColor="#FFFFFF"
                />
                <Button
                  borderColor="#FF7020"
                  background="#FF7020"
                  color="#FFFFFF"
                  text="ADD TO CART"
                  hoverbg="#FFFFFF"
                  hoverColor="#FF7020"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="container flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[25%] h-fit pt-[80px] pb-10 rounded-[12px] bg-[#FF7020] px-5">
            <div className="flex flex-col items-center gap-2 mb-5">
              <div className="flex items-baseline ">
                <h1 className="text-8xl font-semibold text-white">4.0</h1>
                <p className="text-base text-[#FFFFFF73]">/5</p>
              </div>
              <Ratings rating={rating} className="text-3xl text-[#EBFF00]" />
              <p className="font-normal text-base text-white">223 REVIEWS</p>
            </div>
            <ProgressBar totalReviews={223} fiveStarReviews={186} rating={5} />
            <ProgressBar totalReviews={223} fiveStarReviews={18} rating={4} />
            <ProgressBar totalReviews={223} fiveStarReviews={12} rating={3} />
            <ProgressBar totalReviews={223} fiveStarReviews={5} rating={2} />
            <ProgressBar totalReviews={223} fiveStarReviews={3} rating={1} />
          </div>
          <div className="w-full lg:w-[75%]">
            <ProductTabs />

            <div className="py-5">
              <h1 className="2xl:text-2xl md:text-lg text-base font-semibold mb-3">
                See the best picture no matter where you sit
              </h1>
              <p className="2xl:text-lg md:text-base text-sm 2xl:leading-[30px] leading-[25px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>

            <Image width="full" height="auto" image={placeholder} />

            <div className="py-5">
              <h1 className="2xl:text-2xl md:text-lg text-base font-semibold mb-3">
                See the best picture no matter where you sit
              </h1>
              <p className="2xl:text-lg md:text-base text-sm 2xl:leading-[30px] leading-[25px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,  
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>

            <div className="py-5">
              <h1 className="2xl:text-2xl md:text-lg text-base font-semibold mb-3">
                See the best picture no matter where you sit
              </h1>
              <p className="2xl:text-lg md:text-base text-sm 2xl:leading-[30px] leading-[25px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

const Ratings = ({ rating, className }) => {
  const value = parseFloat(rating);
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;

  return (
    <div className={`flex gap-0.5  ${className}`}>
      {/* Full stars */}
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}

      {/* Half star (if needed) */}
      {hasHalfStar && <FaStarHalfAlt />}
    </div>
  );
};

const ProgressBar = ({ totalReviews, fiveStarReviews, rating }) => {
  const progressPercentage = Math.max(
    0,
    Math.min(100, (fiveStarReviews / totalReviews) * 100)
  );

  return (
    <div>
      <div className="flex items-center justify-between pb-3 my-3">
        <Ratings rating={rating} className="text-sm text-[#FFFFFF]" />
        <p className="text-white">{fiveStarReviews}</p>
      </div>

      <div className="flex-grow bg-[#FFFFFF36] rounded-[11px] overflow-hidden h-[8px] relative">
        <div
          className="bg-white h-[11px] rounded-[20px] absolute left-0"
          style={{ width: `${progressPercentage}%` }} // Dynamic width based on calculated percentage
        ></div>
      </div>
    </div>
  );
};

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = [
    { name: "Description", count: null },
    { name: "Specification", count: null },
    { name: "Discussion", count: null },
    { name: "Reviews", count: 223 },
  ];

  return (
    <div className="w-full bg-[#F9F9F9] px-2 py-3 sm:py-5 sm:px-7 rounded-xl">
      <ul className="flex gap-3 sm:gap-5 md:gap-7 w-full overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <li
            key={tab.name}
            className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold cursor-pointer pb-2 whitespace-nowrap transition-colors duration-200
              ${
                activeTab === tab.name
                  ? "text-[#FF7020] border-b-2 border-[#FF7020]"
                  : "text-[#9F9F9F] hover:text-[#FF7020] hover:border-b-2 hover:border-[#FF7020]"
              }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
            {tab.count !== null && (
              <span className="ml-1 sm:ml-2">({tab.count})</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
