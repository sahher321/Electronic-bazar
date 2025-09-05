import React from "react";
import {
  Button,
  Checkbox,
  Input,
  NewsLetter,
  RecentlySlider,
} from "../../component";

const Checkout = () => {
  return (
    <>
      <div className="py-15 ">
        <div className="container flex lg:flex-row flex-col gap-5 ">
          <div className="flex basis-[65%] flex-col gap-5">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold ">Shipping Detail</h2>
              <p className="text-sm text-gray-500">Choose from address book</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Full Name" placeholder="Enter your full name" />
              <Input
                label="Phone Number"
                placeholder="Enter your phone number"
              />
              <Input label="Email Address" placeholder="Enter your email" />
              <Input
                label="Street Address"
                placeholder="Enter your street address"
              />
              <Input label="City" placeholder="Enter your city" />
              <Input label="Postal Code" placeholder="Enter postal code" />

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-black mb-3">
                  Note
                </label>
                <textarea
                  rows="4"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none "
                ></textarea>
              </div>
              <div className="flex gap-5">
                <Checkbox />
                <p>Add to address book</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col basis-[35%] border border-[#D4D4D4] p-5 rounded-xl">
            <p className="text-base font-semibold text-black">My Orders</p>
            <div className="py-5 flex flex-col gap-2 border-b-2 border-[#F3F3F3]">
              <div className="flex gap-5 justify-between">
                <div className="flex gap-4">
                  <p className="text-base font-medium text-black">1x</p>
                  <p className="text-sm text-[#8D8D8D] font-normal">
                    LED Monitor With High Quality In The World
                  </p>
                </div>

                <p className="text-base font-medium text-black">$976.33</p>
              </div>
              <div className="flex gap-5 justify-between">
                <div className="flex gap-4">
                  <p className="text-base font-medium text-black">1x</p>
                  <p className="text-sm text-[#8D8D8D] font-normal">
                    LED Monitor With High Quality In The World
                  </p>
                </div>

                <p className="text-base font-medium text-black">$976.33</p>
              </div>
            </div>
            <div className="py-5 flex flex-col gap-2 border-b-2 border-[#F3F3F3]">
              <div className="flex justify-between">
                <p className="text-sm text-[#8D8D8D] font-normal">Subtotal</p>
                <p className="text-base font-medium text-black"> $1,952.66</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-[#8D8D8D] font-normal">Shipping</p>
                <p className="text-base font-medium text-black">
                  <span className="text-sm text-[#8D8D8D] font-normal">
                    Free Shipping{" "}
                  </span>
                  0$
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-[#8D8D8D] font-normal">Tax</p>
                <p className="text-base font-medium text-black"> $4.00</p>
              </div>
            </div>
            <div className="py-5 flex justify-between border-b-2 border-[#F3F3F3]">
              <p className="text-base font-medium text-black">Order Total</p>
              <p className="text-2xl font-semibold text-[#FF7020]">$1,956.66</p>
            </div>
            <div className="py-5 flex flex-col gap-2 border-b-2 border-[#F3F3F3]">
              <p className="text-base font-semibold text-black mb-4">Payment</p>
              <ul className="flex flex-col gap-5 mb-5">
                <li className="text-base font-medium text-black flex gap-5">
                  <span>
                    <Checkbox />
                  </span>
                  Direct Bank Transfer
                </li>
                <li className="text-base font-medium text-black flex gap-5">
                  <span>
                    <Checkbox />
                  </span>
                  Paypol
                </li>
                <li className="text-base font-medium text-black flex gap-5">
                  <span>
                    <Checkbox />
                  </span>
                  Cash On Delivery
                </li>
              </ul>
            </div>
            <Button
              borderColor="#FF7020"
              background="#FF7020"
              color="#FFFFFF"
              text="CHECKOUT"
              hoverbg="#FFFFFF"
              hoverColor="#FF7020"
            />
            <p className="text-sm text-[#8D8D8D] font-normal mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore e
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <RecentlySlider />
      </div>
      <div className="">
        <NewsLetter />
      </div>
    </>
  );
};

export default Checkout;
