import { IoMdCheckmark } from "react-icons/io";
import React from "react";
const Checkbox = () => {
  return (
    <div className="relative flex items-center justify-center w-[23px] h-[23px] border-2 border-[#898989] rounded-md cursor-pointer peer">
      <input
        type="checkbox"
        id="custom-checkbox"
        className="appearance-none cursor-pointer w-full h-full absolute checked:bg-[#FF7020] checked:border-none peer"
      />
      <span className="text-white text-sm hidden peer-checked:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <IoMdCheckmark />
      </span>
    </div>
  );
};
export default Checkbox;
