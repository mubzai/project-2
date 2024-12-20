"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import { useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const handleAddToWishlist = (item) => {
    if (!wishlist.includes(item)) {
      setWishlist([...wishlist, item]);
    }
  };

  const handleRemoveFromWishlist = (item) => {
    setWishlist(wishlist.filter((i) => i !== item));
  };

  return (

    <div><Heading/> 
        <Header/>
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          My Wishlist
        </h1>
        </div>
        {/* Wishlist Items */}
        <div className="space-y-4">
          {wishlist.length > 0 ? (
            wishlist.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border rounded-md p-4 bg-gray-50"
              >
                <span className="text-lg font-medium text-gray-700">{item}</span>
                <button
                  onClick={() => handleRemoveFromWishlist(item)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              Your Wishlist is empty. Add some items!
            </p>
          )}
        </div>

        {/* Add Items Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Add Items to Wishlist
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleAddToWishlist("Product A")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Add Product A
            </button>
            <button
              onClick={() => handleAddToWishlist("Product B")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Add Product B
            </button>
            <button
              onClick={() => handleAddToWishlist("Product C")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Add Product C
            </button>
            <button
              onClick={() => handleAddToWishlist("Product D")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Add Product D
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Wishlist;
