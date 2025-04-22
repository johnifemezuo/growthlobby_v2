"use client";

import { ArrowDownCircle } from "lucide-react";
import * as React from "react";

export function DropdownCategory(
  {
    categories,
    setActiveFilter,
    selectedCategory,
  }: Readonly<{ categories: string[]; setActiveFilter: (val: string) => void, selectedCategory: string }>,
  
) {
  const [closeModal, setCloseModal] = React.useState(false);

  return (
    <div className="relative inline-block text-left z-40">
      {/* Dropdown Button */}
      <label htmlFor="category">Product Category</label>
      <br />
      <button
        onClick={() => setCloseModal(!closeModal)}
        className="bg-gray-200 flex items-center justify-between mt-2 px-4 py-2 rounded-md text-left  hover:bg-gray-300 w-[250px]"
      >
       <span>{selectedCategory}</span> 
       <ArrowDownCircle size={16} />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute mt-2 bg-white border w-[250px] border-gray-200 rounded-md shadow-lg ${closeModal ? "block" : "hidden"}`}
      >
        {categories.map((category, i) => (
          <div
            key={i}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer capitalize"
            onClick={() =>{ setActiveFilter(category); setCloseModal(false)}}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}
