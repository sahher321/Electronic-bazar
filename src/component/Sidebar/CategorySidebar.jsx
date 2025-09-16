import React, { useState } from "react";
import { data } from "react-router-dom";

export const categories = [
  {
    name: "Laptop & Computer",
    count: 45,
    subcategories: [
      {
        name: "Hardware",
        count: 25,
        subcategories: [
          { name: "Laptop", count: 10 },
          { name: "Memory", count: 8 },
          { name: "Storage", count: 7 },
        ],
      },
      {
        name: "Software",
        count: 20,
        subcategories: [
          { name: "Operating Systems", count: 7 },
          { name: "Office Tools", count: 6 },
          { name: "Antivirus", count: 7 },
        ],
      },
    ],
  },
  { name: "Smartphone", count: 21 },
  { name: "TV", count: 32 },
  { name: "Wireless Hardware", count: 15 },
  { name: "Virtual Reality ", count: 21 },
  { name: "Ultra book", count: 15 },
  { name: "Desktop PC’s", count: 15 },
  { name: "Speaker", count: 15 },
  { name: "Routers", count: 15 },
  { name: "PC Components", count: 15 },
];

const CategoryItem = ({ item, path, openMap, toggleOpen, level = 0 }) => {
  const isOpen = openMap[path];
  const hasSub =
    Array.isArray(item.subcategories) && item.subcategories.length > 0;

  return (
    <li>
      <div
        className="flex items-start justify-between cursor-pointer"
        onClick={() => hasSub && toggleOpen(path)}
        style={{ paddingLeft: `${level * 10}px` }}
      >
        <span
          className={`block text-base font-medium lato transition-colors duration-150 ${
            level === 0 || level === 1
              ? "text-black hover:text-[#FF7020]"
              : "text-[#8D8D8D]"
          }`}
        >
          {item.name}
          {(level === 0 || level === 1) && item.count !== undefined && (
            <span className="text-[#8D8D8D] ml-1 font-normal">
              ({item.count})
            </span>
          )}
        </span>
      </div>

      {isOpen && hasSub && (
        <ul className="mt-1 space-y-1">
          {item.subcategories.map((sub, index) => (
            <CategoryItem
              key={index}
              item={typeof sub === "string" ? { name: sub } : sub}
              path={`${path}-${index}`}
              openMap={openMap}
              toggleOpen={toggleOpen}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const CategorySidebar = () => {
  const [openMap, setOpenMap] = useState({});

  const toggleOpen = (path) => {
    setOpenMap((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  return (
    <div className="w-full  max-h-[400px] overflow-y-auto  scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-white  p-8 rounded-2xl border border-[#C4C4C4] ">
      <h2 className="text-xl font-semibold mb-4">Show all categories</h2>

      <div className="max-h-[90%]  pr-2 custom-scroll">
        <ul className="space-y-2">
          {categories.map((cat, index) => (
            <CategoryItem
              key={index}
              item={cat}
              path={`${index}`}
              openMap={openMap}
              toggleOpen={toggleOpen}
            />
            
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategorySidebar;
