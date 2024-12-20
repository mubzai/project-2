"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LatestProducts = () => {
  const router = useRouter();

  // Product list with price as a number
  const products = [
    { id: 1, name: "Cantilever chair", price: 29.99, image: "/new1.jpg" },
    { id: 2, name: "Cantilever chair", price: 39.99, image: "/new2.jpg" },
    { id: 3, name: "Cantilever chair", price: 19.99, image: "/new3.jpg" },
    { id: 4, name: "Cantilever chair", price: 49.99, image: "/new1.jpg" },
    { id: 5, name: "Cantilever chair", price: 59.99, image: "/new2.jpg" },
    { id: 6, name: "Cantilever chair", price: 69.99, image: "/new3.jpg" },
  ];

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const productIndex = existingCart.findIndex((item) => item.id === product.id);
    
    if (productIndex !== -1) {
      // If the product is already in the cart, increase its quantity
      existingCart[productIndex].quantity += 1;
    } else {
      // If not, add the product with quantity 1
      existingCart.push({ ...product, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Navigate to the cart page
    router.push("/cart");
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">
        Latest Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg text-blue-900 p-4 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-24 object-contain rounded-md mb-4"
              loading="lazy"
            />
            <h3 className="text-lg text-blue-900 font-semibold">{product.name}</h3>
            <p className="text-gray-700">${product.price.toFixed(2)}</p>

            <button
              onClick={() => addToCart(product)}
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
