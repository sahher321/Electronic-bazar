import React from "react";
import PropTypes from "prop-types";
import Rating from "../SmallComponent/Rating";

const ProductWeekCard = ({ image, name, price, oldPrice, rating, sold }) => {
  return (
    <div className="h-[450px] flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200 my-5 w-full">
      {/* Product Image */}
      <div className="h-[65%] w-full rounded-3xl overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="object-cover h-full w-full rounded-3xl"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col h-[35%] justify-between">
        {/* Title & Sold */}
        <div>
          <h3 className="text-lg font-semibold text-black truncate">{name}</h3>
          <p className="text-gray-400 text-xs">{sold} sold</p>
        </div>

        {/* Price & Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-[#FF7020] font-bold text-base">${price}</p>
            {oldPrice && (
              <p className="text-gray-400 line-through text-xs">${oldPrice}</p>
            )}
          </div>
          <Rating rating={rating} />
        </div>
      </div>
    </div>
  );
};

ProductWeekCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  oldPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rating: PropTypes.number,
  sold: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ProductWeekCard.defaultProps = {
  oldPrice: null,
  rating: 0,
  sold: 0,
};

export default ProductWeekCard;
