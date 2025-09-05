import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ rating, margin }) => {
  const value = parseFloat(rating);
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;

  return (
    <div className={`flex gap-0.5 text-[#FF7020] text-sm ${margin}`}>
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

export default Rating;
