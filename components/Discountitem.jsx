"use client";
import React from 'react';

const DiscountItem = () => {
  return (
    <div className="p-5 text-center">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-5">Discount Item</h2>

      {/* Product Categories */}
      <div className="flex justify-center gap-3 mb-5">
        {["Wood Chair", "Plastic Chair", "Sofa Collection"].map((category) => (
          <span
            key={category}
            className="cursor-pointer px-4 py-2 rounded transition-all duration-300 hover:bg-pink-500"
          >
            {category}
          </span>
        ))}
      </div>

      {/* Hover Box */}
      <div className="bg-white rounded-lg shadow-lg p-5 max-w-4xl mx-auto flex justify-between transition-all duration-300 hover:bg-gray-50">
        {/* Left Side Content */}
        <div className="flex-1">
          {/* Discount Text */}
          <p className="text-lg font-bold text-[#151875]">20% Discount on All Products</p>

          {/* Description */}
          <h3 className="text-xl font-bold text-pink-500 mb-2">Eams Sofa Compact</h3>
          <p className="text-base mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
          </p>
          <p className="text-base mb-3">
            Material exposed like metals, simple neutral colours, clear lines, and geometric figures.
          </p>

          {/* Features List */}
          <ul className="mb-5 text-base">
            <li>✓ Clear lines and geometric figures</li>
            <li>✓ Material exposed like metals</li>
          </ul>

          {/* Shop Now Button */}
          <button className="px-5 py-2 bg-pink-500 text-white rounded cursor-pointer text-lg">
            Shop Now
          </button>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/sofa1.jpg" // Replace with your image path
            alt="Eams Sofa Compact"
            className="w-full max-w-xs rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountItem;
