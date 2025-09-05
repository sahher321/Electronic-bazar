import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const ProductGallery = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);

  const maxVisibleImages = 4;
  const canScrollUp = scrollIndex > 0;
  const canScrollDown = scrollIndex < images.length - maxVisibleImages;

  const handleScrollUp = () => {
    if (canScrollUp) setScrollIndex((prev) => prev - 1);
  };

  const handleScrollDown = () => {
    if (canScrollDown) setScrollIndex((prev) => prev + 1);
  };

  return (
    <div className="flex gap-2  mx-auto ">
      {/* Main Image */}
      <div className="flex-3 my-auto lg:my-0 h-[250px] sm:h-[320px] lg:h-[450px] ">
        <img
          src={images[selectedIndex]}
          alt={`Product ${selectedIndex}`}
          className="w-full h-full "
        />
      </div>

      {/* Thumbnails with Vertical Scroll */}
      <div className=" flex flex-col items-center gap-2">
        {/* Up Button */}
        <button
          onClick={handleScrollUp}
          className=" p-2 text-[#949494] hover:text-[#FF7020] cursor-pointer"
          disabled={!canScrollUp}
        >
          <FaChevronUp />
        </button>

        {/* Thumbnails */}
        <div className="flex flex-col gap-2 overflow-hidden my-auto">
          {images
            .slice(scrollIndex, scrollIndex + maxVisibleImages)
            .map((img, idx) => (
              <div
                key={idx}
                className={`w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] p-1 ${
                  selectedIndex === idx + scrollIndex
                    ? "border-2 border-[#FF7020]"
                    : "border border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  className="w-full h-full cursor-pointer object-cover "
                  onClick={() => setSelectedIndex(idx + scrollIndex)}
                />
              </div>
            ))}
        </div>

        {/* Down Button */}
        <button
          onClick={handleScrollDown}
          className=" p-2 text-[#949494] hover:text-[#FF7020] cursor-pointer"
          disabled={!canScrollDown}
        >
          <FaChevronDown />
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;
