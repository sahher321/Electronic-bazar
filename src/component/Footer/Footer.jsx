import React from "react";
import { Link } from "react-router-dom";
import Image from "../SmallComponent/Image";
import { appStore, googlePlay, headphone, logo } from "../../assets";
import {
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-white py-12 footer">
        <div className="container grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4 lg:p-4">
            <Link to="/" className="flex items-center gap-1 mb-5">
              <Image image={logo} width="21px" height="33px" />
              <p className="text-base font-semibold uppercase">
                ELECTRONIC BAZAR
              </p>
            </Link>
            <p className="text-base leading-[28px] mb-7 text-[#4D4D4D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((icon, index) => (
                <Button
                  key={index}
                  className="bg-[#CBCBCB3B] hover:bg-[#FF70203B] text-[#4E4E4E73] w-[50px] h-[50px] rounded-2xl flex items-center justify-center hover:text-[#FF7020] cursor-pointer"
                >
                  {icon.icon}
                </Button>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-2 lg:p-4">
            <h1 className="text-base font-semibold uppercase mb-5">
              QUICK LINKS
            </h1>
            <ul className="space-y-1">
              {quickLink.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-base text-[#4D4D4D] leading-[38px]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-2 lg:p-4">
            <h1 className="text-base font-semibold uppercase mb-5">
              CUSTOMER AREA
            </h1>
            <ul className="space-y-1">
              {customerLink.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-base text-[#4D4D4D] leading-[38px]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:p-4">
            <h1 className="text-base font-semibold uppercase mb-5">
              CONTACT US
            </h1>
            <p className="text-base leading-[24px] text-black font-normal mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex items-center gap-2 mb-7">
              <Image width="48px" height="51px" image={headphone} />
              <div>
                <p className="text-sm font-normal leading-[24px]">
                  Have any question?
                </p>
                <Link to="#" className="text-base font-semibold text-[#FF7020]">
                  +123 456 789
                </Link>
              </div>
              <Button className="bg-white text-[#3D7BD8] font-medium py-3 px-6 rounded-2xl border border-[#3D7BD8] text-base cursor-pointer ml-6">
                LIVE CHAT
              </Button>
            </div>
            <div className="flex gap-3">
              <Image width="50%" height="100%" image={appStore} />
              <Image width="50%" height="100%" image={googlePlay} />
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </>
  );
};

export const CopyRight = () => {
  return (
    <div className="py-6 border-t border-[#4D4D4D]">
      <div className="container flex items-center justify-between ">
        <p className="text-base leading-[28px] text-[#4D4D4D]">
          ELECTRONIC BAZZAR - © 2025 All Rights Reserved
        </p>
        <div className="flex items-center  gap-10">
          <p className="text-lg leading-[28px] text-[#4D4D4D]">Payment</p>
          <div className="flex gap-5">
            <p className="text-lg  leading-[28px] text-[#3D7BD8A6] italic">
              VISA
            </p>
            <p className="text-lg  leading-[28px] text-[#BA8CAC] italic">
              MASTERCARD
            </p>
            <p className="text-lg  leading-[28px] text-[#6CC0E3A6] italic">
              PAYPAL
            </p>
            <p className="text-lg  leading-[28px] text-[#FF8717A6] italic">
              BITCOIN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Button = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};

const socialIcons = [
  { icon: <FaYoutube className="w-[18px] h-[18px]" /> },
  { icon: <FaLinkedin className="w-[18px] h-[18px]" /> },
  { icon: <FaTwitter className="w-[18px] h-[18px]" /> },
  { icon: <FaFacebookF className="w-[18px] h-[18px]" /> },
  { icon: <FaInstagram className="w-[18px] h-[18px]" /> },
];

const quickLink = [
  { name: "About us", path: "#" },
  { name: "Contact us", path: "#" },
  { name: "Products", path: "#" },
  { name: "Login", path: "#" },
  { name: "Sign Up", path: "#" },
];

const customerLink = [
  { name: "My Account", path: "#" },
  { name: "Orders", path: "#" },
  { name: "Wishlist", path: "#" },
  { name: "Cart", path: "#" },
  { name: "Help", path: "#" },
];

export default Footer;
