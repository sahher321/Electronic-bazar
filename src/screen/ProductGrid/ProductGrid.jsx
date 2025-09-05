import React, { useEffect, useState, useRef, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Banner,
  BestDealCard,
  Button,
  CategorySidebar,
  Image,
  NewsLetter,
  Pagination,
  ProductCard,
  RecentlyViewed,
} from "../../component";
import {
  AiFillAppstore,
  AiOutlineMenu,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa";
import HotDeal from "../../component/Section/HotDeal";

const ProductGrid = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json");
        if (!res.ok) throw new Error("Network response was not ok");
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="py-15">
      <div className="container">
        <div className="block lg:hidden mb-5">
          {/* You can replace this with actual drawer or modal */}
          <button className="flex items-center gap-2 text-[#FF7020]">
            <AiOutlineMenu size={20} />
            <span className="font-semibold">Categories</span>
          </button>
        </div>

        <div className="hidden lg:grid grid-cols-4 gap-5">
          <div className="space-y-5">
            <CategorySidebar />
            <ProductFilterUI />
          </div>

          <div className="col-span-3 space-y-10">
            <Banner />

            <div className="flex justify-between items-center">
              <h2 className="text-xl sm:text-3xl font-semibold">
                Laptop Products
              </h2>
              <div className="flex gap-3">
                <button>
                  <AiFillAppstore
                    size={16}
                    className="text-[#949494] hover:text-[#FF7020]"
                  />
                </button>
                <button>
                  <AiOutlineUnorderedList
                    size={16}
                    className="text-[#949494] hover:text-[#FF7020]"
                  />
                </button>
                <button className="flex items-center gap-1">
                  <p className="text-base lato font-semibold">Popularity</p>
                  <FaCaretDown
                    size={16}
                    className="text-[#949494] hover:text-[#FF7020]"
                  />
                </button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {Array.from({ length: 12 }).map((_, i) => (
                <ProductCard key={i} />
              ))}
            </div>

            <Pagination />
          </div>
        </div>

        <div className="block lg:hidden space-y-10">
          <div>
            <Banner />
          </div>

          <div>
            <ProductFilterUI />
          </div>

          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Laptop Products</h2>
            <div className="flex gap-3">
              <button>
                <AiFillAppstore
                  size={16}
                  className="text-[#949494] hover:text-[#FF7020]"
                />
              </button>
              <button>
                <AiOutlineUnorderedList
                  size={16}
                  className="text-[#949494] hover:text-[#FF7020]"
                />
              </button>
              <button className="flex items-center gap-1">
                <p className="text-sm lato font-semibold">Popularity</p>
                <FaCaretDown
                  size={16}
                  className="text-[#949494] hover:text-[#FF7020]"
                />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProductCard key={i} />
            ))}
          </div>

          <Pagination />
        </div>

        <div className="mt-10 space-y-10">
          <HotDeal data={data} />
          <RecentlyViewed data={data} />
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default ProductGrid;

const ProductFilterUI = () => {
  const rangeRef = useRef(null);
  const lowerThumbRef = useRef(null);
  const upperThumbRef = useRef(null);
  const [lowerValue, setLowerValue] = useState(200);
  const [upperValue, setUpperValue] = useState(800);
  const minPrice = 0;
  const maxPrice = 1000;
  const brands = ["Apple", "Samsung", "Xiaomi", "Sony", "LG", "Google"];
  const locations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "London",
    "Paris",
  ];
  const allColors = [
    "White",
    "Black",
    "Blue",
    "Red",
    "Green",
    "Yellow",
    "Pink",
    "Grey",
    "Brown",
    "Purple",
  ];
  const getPercentage = useCallback(
    (value) => ((value - minPrice) / (maxPrice - minPrice)) * 100,
    [minPrice, maxPrice]
  );

  const updateSliderPositions = useCallback(() => {
    if (rangeRef.current) {
      const lowerPercent = getPercentage(lowerValue);
      const upperPercent = getPercentage(upperValue);

      if (lowerThumbRef.current)
        lowerThumbRef.current.style.left = `${lowerPercent}%`;
      if (upperThumbRef.current)
        upperThumbRef.current.style.left = `${upperPercent}%`;

      const filledTrack = rangeRef.current.querySelector(
        ".slider-filled-track"
      );
      if (filledTrack) {
        filledTrack.style.left = `${lowerPercent}%`;
        filledTrack.style.width = `${upperPercent - lowerPercent}%`;
      }
    }
  }, [lowerValue, upperValue, getPercentage]);

  useEffect(() => {
    updateSliderPositions();
  }, [lowerValue, upperValue, updateSliderPositions]);

  const handleLowerThumbMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const initial = lowerValue;
    const width = rangeRef.current.offsetWidth;

    const onMouseMove = (moveEvent) => {
      const delta = moveEvent.clientX - startX;
      const newVal = Math.round(
        initial + (delta / width) * (maxPrice - minPrice)
      );
      setLowerValue(Math.max(minPrice, Math.min(newVal, upperValue)));
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const handleUpperThumbMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const initial = upperValue;
    const width = rangeRef.current.offsetWidth;

    const onMouseMove = (moveEvent) => {
      const delta = moveEvent.clientX - startX;
      const newVal = Math.round(
        initial + (delta / width) * (maxPrice - minPrice)
      );
      setUpperValue(Math.min(maxPrice, Math.max(newVal, lowerValue)));
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const handleTrackClick = (e) => {
    const rect = rangeRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickPercent = (clickX / rect.width) * 100;
    const clickValue = minPrice + (clickPercent / 100) * (maxPrice - minPrice);

    const lowerDiff = Math.abs(clickValue - lowerValue);
    const upperDiff = Math.abs(clickValue - upperValue);

    if (lowerDiff <= upperDiff) {
      setLowerValue(Math.max(minPrice, Math.min(clickValue, upperValue)));
    } else {
      setUpperValue(Math.min(maxPrice, Math.max(clickValue, lowerValue)));
    }
  };

  // State for dropdowns (just to show selection visually)
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // State for color selection
  const [selectedColors, setSelectedColors] = useState([]);
  const [showAllColors, setShowAllColors] = useState(false);

  const visibleColors = showAllColors ? allColors : allColors.slice(0, 4);

  const handleColorClick = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleSelectAllColors = (e) => {
    if (e.target.checked) {
      setSelectedColors(allColors);
    } else {
      setSelectedColors([]);
    }
  };

  const handleFilterClick = () => {
    console.log("Filter button clicked!");
    console.log("Selected Brand:", selectedBrand);
    console.log("Selected Location:", selectedLocation);
    console.log("Selected Colors:", selectedColors);
    // In a real application, you would dispatch an action or call a filtering function here
  };

  const handleResetFilter = () => {
    console.log("Reset Filter clicked!");
    setSelectedBrand("");
    setSelectedLocation("");
    setSelectedColors([]);
    setShowAllColors(false);
    // In a real application, this would clear all filter criteria
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-xl sm:text-3xl  font-semibold mb-5">Filters</h1>
      <div className="mb-4">
        <h3 className="text-base lg:text-lg font-semibold text-gray-700 mb-4">
          Price Range
        </h3>
        <div
          ref={rangeRef}
          className="relative h-1.5 bg-gray-300 rounded-full cursor-pointer"
          onClick={handleTrackClick}
        >
          <div className="absolute h-full bg-[#FF7020] rounded slider-filled-track"></div>

          <div
            ref={lowerThumbRef}
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#FF7020] rounded-full cursor-grab active:cursor-grabbing"
            onMouseDown={handleLowerThumbMouseDown}
          />
          <div
            ref={upperThumbRef}
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#FF7020] rounded-full cursor-grab active:cursor-grabbing"
            onMouseDown={handleUpperThumbMouseDown}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-3">
          <span>${lowerValue}</span>
          <span>${upperValue}</span>
        </div>
      </div>
      <div className="mb-4">
        <select
          className="selected font-medium py-4 px-6 rounded-lg text-sm lg:text-base cursor-pointer transition-all duration-300 lato bg-white border-2 border-[#EBEBEB] w-full focus:outline-none focus:ring-1 focus:ring-[#FF7020] focus:border-[#FF7020]"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="" disabled>
            Choose Brand
          </option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Choose Location Dropdown */}
      <div className="mb-4">
        <select
          className="font-medium py-4 px-6 rounded-lg text-sm lg:text-base cursor-pointer transition-all duration-300 lato bg-white border-2 border-[#EBEBEB] w-full focus:outline-none focus:ring-1 focus:ring-[#FF7020] focus:border-[#FF7020]"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="" disabled>
            Choose Location
          </option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Color Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-700 font-medium text-base">Color</span>
          <label className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-orange-500 rounded focus:ring-orange-500"
              checked={selectedColors.length === allColors.length}
              onChange={handleSelectAllColors}
            />
            <span className="ml-2">Select All</span>
          </label>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {visibleColors.map((color) => (
            <button
              key={color}
              className={`font-medium py-3 px-6 rounded-lg text-base cursor-pointer  transition-all duration-300 lato text-[#FF7020]
                ${
                  selectedColors.includes(color)
                    ? "bg-[#FF702026] border border-none "
                    : "bg-white border border-[#FFEADE] "
                }`}
              onClick={() => handleColorClick(color)}
            >
              {color}
            </button>
          ))}
        </div>
        {allColors.length > 4 && (
          <button
            className="mt-3 text-orange-500 text-sm hover:underline focus:outline-none"
            onClick={() => setShowAllColors(!showAllColors)}
          >
            {showAllColors ? "- Show less" : "+ Show more"}
          </button>
        )}
      </div>

      {/* FILTER Button */}
      <Button
        borderColor="#FF7020"
        background="#FF7020"
        color="#FFFFFF"
        text="FILTER"
        hoverbg="#FFFFFF"
        hoverColor="#FF7020"
      />
      {/* Reset Filter Link */}
      <div className="text-center">
        <button
          className="text-orange-500 text-sm hover:underline focus:outline-none"
          onClick={handleResetFilter}
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
};
