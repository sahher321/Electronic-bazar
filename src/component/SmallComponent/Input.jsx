import React from "react";

const Input = () => {
  return (
    <div className="flex flex-col space-y-1">
      <label
        htmlFor="email"
        className="text-sm font-medium text-black mb-3 lato"
      >
        Email Address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="border border-[#D4D4D4] rounded-lg px-4 py-4 focus:outline-none lato"
      />
    </div>
  );
};

export default Input;
