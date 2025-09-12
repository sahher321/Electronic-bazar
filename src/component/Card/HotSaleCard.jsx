import React from "react";
import Image from "../SmallComponent/Image";
import Button from "../SmallComponent/Button";

const HotSaleCard = ({
  image,
  name = "Product Name",
  price = 0,
  oldPrice,
  stock = 0,
  showSale = true,
}) => {
  const SALE_COLOR = "#FF7020";

  return (
    <div className="w-full h-[500px] flex flex-col shadow-lg bg-white rounded-2xl my-5 relative overflow-hidden">
      {showSale && (
        <div
          className="w-[70px] h-[60px] rounded-full absolute top-4 right-4 flex items-center justify-center z-10"
          style={{ backgroundColor: SALE_COLOR }}
        >
          <p className="lato font-semibold text-base text-white">SALE</p>
        </div>
      )}

      {/* Product Image */}
      <div className="h-[50%]">
        <Image
          width="100%"
          height="100%"
          image={image}
          borderRadius="rounded-2xl"
          alt={name}
        />
      </div>

      {/* Product Details */}
      <div className="h-[50%] p-4 flex flex-col justify-between text-center">
        <div>
          {oldPrice && (
            <p className="text-gray-400 line-through text-xs">${oldPrice}</p>
          )}
          <p className="text-[#FF7020] font-bold text-base">${price}</p>
        </div>

        <h3 className="text-lg font-semibold text-black leading-tight h-[48px] overflow-hidden">
          {name}
        </h3>

        {/* Stock Progress */}
        <div className="w-full">
          <div className="w-full bg-gray-200 h-2 rounded-lg overflow-hidden">
            <div
              className="h-2"
              style={{ width: `${stock}%`, backgroundColor: SALE_COLOR }}
            />
          </div>
          <p className="text-gray-400 text-xs lato mt-1">{stock} Left in Stock</p>
        </div>

        {/* CTA Button */}
        <Button
          text="Add to Cart"
          background="#FFFFFF"
          color={SALE_COLOR}
          hoverbg={SALE_COLOR}
          hoverColor="#FFFFFF"
          borderColor={SALE_COLOR}
        />
      </div>
    </div>
  );
};

export default HotSaleCard;
