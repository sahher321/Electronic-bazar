import React, { useState } from "react";
import Image from "../SmallComponent/Image";
import { logo, cart, menu, user, search, hotdeal, orange } from "../../assets";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaTruck } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { GoBell } from "react-icons/go";

const Header = () => {
  return (
    <div className="header">
      <SubHeader />
      <div className="lg:block hidden">
        <DesktopHeader />
      </div>
      <div className="lg:hidden block ">
        <MobileHeader />
      </div>
    </div>
  );
};

export const SubHeader = () => {
  return (
    <div className="bg-[#FF7020] py-4">
      <div className="container  flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-7">
          <SubHeaderComp image={FaPhoneAlt} text="+221 33 66 22" />
          <SubHeaderComp image={IoMdMail} text="support@electronicbazar" />
        </div>
        <div className="flex items-center ">
          <div className="border-r border-white flex items-center gap-3 sm:gap-7 pr-2 sm:pr-5">
            <SubHeaderComp image={IoLocationSharp} text="Store Locations" />
            <SubHeaderComp text="Track Your Order" image={FaTruck} />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 pl-2 sm:pl-5">
              <p className="font-semibold text-xs sm:text-sm text-white">
                $ Dollar(US)
              </p>
              <MdArrowDropDown className="text-white" />
            </div>
            <div className="flex items-center gap-1 ">
              <p className="font-semibold text-xs sm:text-sm text-white">EN</p>
              <MdArrowDropDown className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

export const SubHeaderComp = ({ image: Icon, text, width, height }) => {
  return (
    <Link to="#" className="flex items-center gap-2">
      <Icon className="text-white text-lg" />

      <div className="font-semibold text-sm text-white hidden lg:block">
        {text}
      </div>
    </Link>
  );
};

const Links = [
  {
    name: "All Categories",
    path: "#",
  },
  {
    name: "accessories",
    path: "#",
  },
  {
    name: "Smartphone",
    path: "#",
  },
  {
    name: "Computer",
    path: "#",
  },
  {
    name: "Gaming Equipments",
    path: "#",
  },
  {
    name: "TV & Monitors",
    path: "#",
  },
  {
    name: "Headphones",
    path: "#",
  },
  {
    name: "Speaker",
    path: "#",
  },
];

const DesktopHeader = () => {
  return (
    <>
      <div className=" py-5 ">
        <div className="container flex items-center justify-between">
          <Link to={"/"} className="flex items-center gap-0.5">
            <Image image={logo} width="21px" height="33px" />
            <p className="text-sm lg:text-base font-semibold transform-u">
              ELECTRONIC BAZAR
            </p>
          </Link>
          <div className="w-[500px] 2xl:w-[650px] h-[50px] rounded-lg relative">
            <input
              type="search"
              placeholder="Search here..."
              className="w-full h-full bg-[#F1F1F1] text-base font-normal rounded-lg px-5"
            />
            <div className="absolute top-[13px] right-[23px]">
              <Image image={search} width="24px" height="24px" />
            </div>
          </div>

          <div className="relative inline-block">
            <Image width="20px" height="20px" image={cart} />
            <span
              className=" absolute  bg-[#FF7020]  text-white top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full px-1 py-0
              text-xs font-bold min-w-[20px] h-[20px] flex items-center justify-center shadow"
            >
              0
            </span>
          </div>
          <div className="relative inline-block">
            <GoBell className="text-2xl text-[#595959]" />
            <span
              className=" absolute  bg-[#FF7020]  text-white top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full px-1 py-0
              text-xs font-bold min-w-[20px] h-[20px] flex items-center justify-center shadow"
            >
              0
            </span>
          </div>

          <button className="bg-[#FF7020]  text-white font-medium gap-2  py-4 px-6  flex items-center rounded-lg">
            <Image width="20px" height="20px" image={user} />
            <p className="text-sm ">MY ACCOUNT</p>
          </button>
        </div>
      </div>
      <div className="shadow-[0px_20px_39px_0px_#00000008] pb-6 pt-2 ">
        <ul className="container flex gap-10">
          {Links.map((link, index) => (
            <li>
              <Link
                to={link.path}
                key={index}
                className="text-xs xl:text-sm font-normal lato text-[#4D4D4D]"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="#"
              className="text-base font-normal text-[ #161616] flex items-center gap-1"
            >
              <Image image={hotdeal} width="18px" height="20px" />

              <p>HOT DEALS</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
const MobileHeader = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const toggleSearch = () => {
    setOpenSearch((prev) => !prev);
    setOpenMenu(false);
  };
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
    setOpenSearch(false);
  };
  return (
    <>
      <div className="py-4 shadow-md bg-white relative z-20">
        <div className="container flex items-center justify-between">
          <Link to={"/"} className="flex items-center gap-1">
            <Image image={logo} width="20px" height="30px" />
            <p className="text-sm font-semibold">ELECTRONIC BAZAR</p>
          </Link>

          <div className="flex items-center gap-2">
            <button onClick={toggleSearch}>
              <Image width="15px" height="15px" image={search} />
            </button>
            <button onClick={toggleMenu}>
              <Image width="15px" height="15px" image={menu} />
            </button>
            <div className="relative">
              <Image width="15px" height="15px" image={cart} />
              <span className="absolute -top-1 -right-1 bg-[#FF7020] text-white text-[10px] w-3 h-3 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <div className="relative ">
              <GoBell className="text-lg text-[#595959]" />
              <span className="absolute -top-1 -right-1 bg-[#FF7020] text-white text-[10px] w-3 h-3 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <button>
              <Image width="15px" height="15px" image={orange} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-30 transform transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-semibold text-lg">Categories</h3>
          <button
            onClick={() => setOpenMenu(false)}
            className="text-xl font-bold"
          >
            &times;
          </button>
        </div>
        <ul className="p-4 space-y-3 text-sm">
          {Links.map((link, index) => (
            <li className="border-b border-[#4D4D4D] p-2">
              <Link
                to={link.path}
                key={index}
                className="text-sm font-normal lato text-[#4D4D4D] "
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="border-b border-[#4D4D4D] p-2">
            <Link
              to="#"
              className="text-base font-normal text-[ #161616] flex items-center gap-1"
            >
              <Image image={hotdeal} width="18px" height="20px" />

              <p>HOT DEALS</p>
            </Link>
          </li>
        </ul>
      </div>

      {openSearch && (
        <div className="w-full relative top-0 left-0 bg-white shadow-lg z-30 transform transition-transform duration-300   rounded-lg  ">
          <input
            type="search"
            placeholder="Search here..."
            className="w-full  bg-[#F1F1F1] py-4 text-base z-50 top-0 font-normal rounded-lg px-5"
          />
          <div className="absolute top-[13px] right-[23px]">
            <Image image={search} width="15px" height="15px" />
          </div>
        </div>
      )}
    </>
  );
};
