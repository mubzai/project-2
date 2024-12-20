"use client";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
const Page = () => {
  return (
    <div> <Heading/>
      <Header />
      <div className="container mx-auto p-6">
        {/* Product Image and Details Section */}
        <div className="flex flex-col md:flex-row mb-6">
          <div className="w-full md:w-1/2 pr-6">
            <img
              src="/img.jpg" // Ensure the correct path to your image
              alt="Playwood Arm Chair"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-blue-900 mb-2">Playwood Arm Chair</h1>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-xl">★★★★★</span>
              <span className="ml-2 text-sm text-gray-600">(29)</span>
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-4">$32.00</p>
            <p className="text-lg text-gray-600 line-through mb-4">$32.00</p>

            {/* Color Selection */}
            <div className="mb-6">
              <p className="text-sm text-gray-700 mb-2">Color:</p>
              <div className="flex space-x-4">
                <button className="w-8 h-8 rounded-full bg-gray-800"></button>
                <button className="w-8 h-8 rounded-full bg-gray-500"></button>
                <button className="w-8 h-8 rounded-full bg-white border"></button>
              </div>
            </div>

            {/* Add to Cart and Wishlist */}
            <div className="flex items-center mb-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700">
                Add To Cart
              </button>
              <button className="ml-4 text-xl text-red-600">
                ♡
              </button>
            </div>

            {/* Categories and Tags */}
            <div className="flex justify-between text-sm text-gray-600 mb-6">
              <div>
                <p className="font-semibold">Categories:</p>
                <p>Furniture, Chairs</p>
              </div>
              <div>
                <p className="font-semibold">Tags:</p>
                <p>Wood, Modern, Comfort</p>
              </div>
            </div>

            {/* Share Section */}
            <div className="mb-6">
              <p className="font-semibold text-gray-700 text-sm mb-2">Share</p>
              <div className="flex space-x-4">
                <button className="bg-blue-500 text-white p-2 rounded-full">
                  <span>F</span> {/* Facebook Icon */}
                </button>
                <button className="bg-blue-400 text-white p-2 rounded-full">
                  <span>T</span> {/* Twitter Icon */}
                </button>
                <button className="bg-gray-800 text-white p-2 rounded-full">
                  <span>I</span> {/* Instagram Icon */}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section - Right Side */}
        <div className="flex flex-col md:flex-row mb-6">
          <div className="w-full md:w-1/2 pr-6">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">Description Additional Video Reviews Video</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Varius tempor. Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet.
              Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis.
              Eu in fringilla vulputate nunc nec. Dui, massa viverra, aliquam dis vulputate vulputate integer sagittis.
            </p>
            <div className="mt-4">
              <button className="text-sm text-blue-600">More details →</button>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Related products here */}
            <div className="border p-4 rounded-lg shadow-md hover:shadow-lg">
              <img src="/product1.jpg" alt="Product 1" className="w-full h-auto rounded-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Modern Wooden Chair</h3>
              <p className="text-xl text-gray-700 mb-2">$29.99</p>
              <div className="flex items-center text-yellow-500">
                <span>★★★★★</span>
                <span className="ml-2 text-sm text-gray-600">(22)</span>
              </div>
            </div>
            {/* Repeat for other products */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
