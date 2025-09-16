import React, { useEffect, useState, useRef, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BestDealCard,
  PopularSearchCard,
  SliderImage,
  SmallCardSection,
  RecentlyViewed,
  NewsLetter,
} from "../../component";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import HotDeal from "../../component/Section/HotDeal";

const Home = () => {
  const sliderRef = useRef(null);

  // 🔹 Common slider base settings
  const baseSliderSettings = useMemo(
    () => ({
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      arrows: false,
    }),
    []
  );

  const popularSearchSettings = useMemo(
    () => ({
      ...baseSliderSettings,
      slidesToShow: 4,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: { slidesToShow: 4, variableWidth: true },
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3, variableWidth: true },
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2, variableWidth: true },
        },
        {
          breakpoint: 480,
          settings: { slidesToShow: 1, variableWidth: true },
        },
      ],
    }),
    [baseSliderSettings]
  );

  const bestDealsSettings = useMemo(
    () => ({
      ...baseSliderSettings,
      slidesToShow: 4,
      responsive: [
        { breakpoint: 1530, settings: { slidesToShow: 4 } },
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 600, settings: { slidesToShow: 2, initialSlide: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
      ],
    }),
    [baseSliderSettings]
  );

  const [data, setData] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: null });

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch("/data.json", { signal: controller.signal });
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result || []);
      } catch (error) {
        if (error.name !== "AbortError") {
          setStatus({ loading: false, error: error.message });
        }
      } finally {
        setStatus((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchData();
    return () => controller.abort();
  }, []);

  if (status.loading) return <p>Loading...</p>;
  if (status.error) return <p className="text-red-500">Error: {status.error}</p>;

  return (
    <>
      {/* Hero Slider */}
      <div className="py-12">
        <SliderImage />
      </div>

      {/* Best Deals */}
      <div className="py-4">
        <div className="container">
          <h1 className="text-3xl font-semibold mb-5">Best Deals</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
            {data.map((item) => (
              <BestDealCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* Popular Searches */}
      <div className="py-10">
        <div className="container">
          <div className="flex justify-between items-center">
            <h1 className="text-xl sm:text-3xl font-semibold">
              Popular Searches
            </h1>
            <div className="flex gap-4">
              <button
                aria-label="Previous"
                className="p-2 text-[#949494] hover:text-[#FF7020]"
                onClick={() => sliderRef.current?.slickPrev()}
              >
                <MdKeyboardArrowLeft size={24} />
              </button>
              <button
                aria-label="Next"
                className="p-2 text-[#949494] hover:text-[#FF7020]"
                onClick={() => sliderRef.current?.slickNext()}
              >
                <MdKeyboardArrowRight size={24} />
              </button>
            </div>
          </div>

          <Slider ref={sliderRef} {...popularSearchSettings}>
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

      {/* Other Sections */}
      <SmallCardSection />
      <HotDeal data={data} />
      <RecentlyViewed data={data} />
      <NewsLetter />
    </>
  );
};

export default Home;
