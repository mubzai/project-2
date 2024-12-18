"use client"
import React from 'react';

const TrendingProducts = () => {
  const products = [
    {
      name: 'Product 1',
      image: '/trend3.jpg', // Replace with actual image paths
      price: '$32',
    },
    {
      name: 'Product 2',
      image: '/trend4.jpg', // Replace with actual image paths
      price: '$45',
    },
    {
      name: 'Product 3',
      image: '/trend3.jpg', // Replace with actual image paths
      price: '$28',
    },
    {
      name: 'Product 4',
      image: '/trend4.jpg', // Replace with actual image paths
      price: '$50',
    },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">
        Trending Products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden text-center p-4 flex flex-col justify-between"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-md text-green-500 mt-2">{product.price}</p>
            <button
              className="mt-4 py-2 px-4 bg-green-500 text-white rounded-lg w-full hover:bg-green-600 transition-colors"
              onClick={() => alert(`${product.name} added to cart`)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
