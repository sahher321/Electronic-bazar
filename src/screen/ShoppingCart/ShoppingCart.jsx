import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import {
  Button,
  Checkbox,
  Image,
  NewsLetter,
  RecentlySlider,
} from "../../component";
import { placeholder, promo } from "../../assets";
import { FaTrash } from "react-icons/fa";

const cartItemsData = [
  {
    id: 1,
    name: "LED Monitor With High Quality In The World",
    price: "$976.33",
    sku: "12314124124",
    quantity: 1,
  },
  {
    id: 2,
    name: "LED Monitor With High Quality In The World",
    price: "$976.33",
    sku: "12314124124",
    quantity: 1,
  },
  {
    id: 3,
    name: "LED Monitor With High Quality In The World",
    price: "$976.33",
    sku: "12314124124",
    quantity: 1,
  },
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(cartItemsData);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((item) => item.id));
    }
  };

  const isAllSelected = selectedItems.length === cartItems.length;

  return (
    <div className="py-5 md:py-15">
      <div className="flex flex-col-reverse lg:flex-row gap-4 container bg-amber-400">
        <div className="flex gap-4 flex-col w-[100%] md:w-[70%]">
          <div className="border border-[#D4D4D4] rounded-xl flex items-center justify-between p-4 ">
            <div className="flex items-center gap-8">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={handleSelectAll}
              />
              <p className="text-sm font-normal text-black">Select All</p>
            </div>
            <div className="flex gap-5 sm:gap-12">
              <button className="text-base text-[#FF7020]">UPDATE CART</button>
              <button className="text-base text-[#FF3535]">REMOVE</button>
            </div>
          </div>

          <div className="md:flex hidden flex-col ">
            {cartItems.map((item) => (
              <div key={item.id} className="p-4 flex gap-6">
                <div className="flex items-center  gap-4">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                  />
                  <div className="w-[150px] h-[130px]">
                    <img
                      src={placeholder}
                      alt=""
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                <div className="flex flex-col basis-[80%] sm:basis-[70%]">
                  <p className="text-xs sm:text-base font-medium mb-2">
                    {item.name}
                  </p>
                  <p className="text-lg font-medium text-[#FF7020] mb-2 sm:mb-6">
                    {item.price}
                  </p>
                  <p className="text-sm text-[#AEAEAE]">+Add Note</p>
                </div>

                <div className="flex flex-col basis-[30%]">
                  <p className="text-xs sm:text-base font-medium text-[#4D4D4D] ml-auto mb-12">
                    SKU {item.sku}
                  </p>
                  <div className="flex justify-between gap-1">
                    <div className="font-medium py-2 px-4 rounded-lg text-base cursor-pointer border border-[#D8D8D8] flex gap-4 sm:gap-8">
                      <button className="text-[#D2D2D2] text-sm sm:text-lg">
                        +
                      </button>
                      <p className="text-[#FF7020] text-sm sm:text-lg ">
                        {item.quantity}
                      </p>
                      <button className="text-[#D2D2D2] text-sm sm:text-lg">
                        -
                      </button>
                    </div>
                    <button className="font-medium py-2 px-3 rounded-lg text-base cursor-pointer border border-[#D8D8D8]">
                      <FaTrash />
                    </button>
                    <button className="font-medium py-2 px-3 rounded-lg text-base cursor-pointer border border-[#D8D8D8]">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* mobile */}
          <div className="flex flex-col md:hidden ">
            {cartItems.map((item) => (
              <div key={item.id} className="p-4 flex flex-col gap-6">
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                  />
                  <div className="w-[150px] h-[130px]">
                    <img
                      src={placeholder}
                      alt=""
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <div>
                      <p className="text-xs sm:text-base font-medium text-[#4D4D4D] flex">
                        SKU {item.sku}
                      </p>
                      <p className="text-xs sm:text-base font-medium mb-2 ">
                        {item.name}
                      </p>
                    </div>
                    <div className="flex flex-row items-center justify-between ">
                      <p className="text-base md:text-lg font-medium text-[#FF7020]">
                        {item.price}
                      </p>
                      <p className="text-sm text-[#AEAEAE]">+Add Note</p>
                    </div>
                    <div className="flex flex-col mt-2">
                      <div className="flex justify-between gap-1">
                        <div className="font-medium py-2 px-4 rounded-lg text-base cursor-pointer border border-[#D8D8D8] flex gap-4 sm:gap-8">
                          <button className="text-[#D2D2D2] text-sm sm:text-lg">
                            +
                          </button>
                          <p className="text-[#FF7020] text-sm sm:text-lg ">
                            {item.quantity}
                          </p>
                          <button className="text-[#D2D2D2] text-sm sm:text-lg">
                            -
                          </button>
                        </div>

                        <div className="flex gap-1">
                          <button className="font-medium py-2 px-2 rounded-lg text-sm cursor-pointer border border-[#D8D8D8]">
                            <FaTrash />
                          </button>
                          <button className="font-medium py-2 px-2 rounded-lg text-sm cursor-pointer border border-[#D8D8D8]">
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-[30%]">
          <div className="border border-[#FF7020] p-4 rounded-xl  gap-5 flex items-center">
            <Image width="37px" height="24px" image={promo} />
            <p className="text-base font-semibold text-[#FF7020]">
              I Have a promo code
            </p>
          </div>
          <div className="border border-[#D4D4D4] p-4 flex flex-col rounded-xl">
            <p className="text-base font-medium mb-2">Shopping Summary</p>
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm">Total</p>
              <p className="text-lg font-medium text-[#FF7020]">$1,952.66</p>
            </div>
            <Button
              borderColor="#FF7020"
              background="#FF7020"
              color="#FFFFFF"
              text="CHECKOUT"
              hoverbg="#FFFFFF"
              hoverColor="#FF7020"
            />
            <button className="text-[#FF7020] cursor-pointer text-sm mt-7">
              Back To Shopping
            </button>
          </div>
        </div>
      </div>

      <div>
        <RecentlySlider />
      </div>

      <div>
        <NewsLetter />
      </div>
    </div>
  );
};

export default ShoppingCart;
