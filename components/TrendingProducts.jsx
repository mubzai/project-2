"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const TrendingProducts = () => {
  const router = useRouter();

  const products = [
    {
      name: 'Recliner Chair',
      image: '/trend3.jpg', // Replace with actual image paths
      price: 32, // Store price as a number (without the $)
    },
    {
      name: 'Armchair',
      image: '/trend4.jpg', // Replace with actual image paths
      price: 45, // Store price as a number (without the $)
    },
    {
      name: 'Rocking Chair',
      image: '/trend3.jpg', // Replace with actual image paths
      price: 28, // Store price as a number (without the $)
    },
    {
      name: 'Cantilever Chair',
      image: '/trend4.jpg', // Replace with actual image paths
      price: 50, // Store price as a number (without the $)
    },
  ];

  // Function to add product to the cart
  const addToCart = (product) => {
    // Get the existing cart from localStorage or initialize an empty array
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add the selected product to the cart, with a quantity of 1
    const updatedCart = [...existingCart, { ...product, quantity: 1 }];
    
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Show a message and navigate to the cart page
    alert(`${product.name} added to cart`);
    router.push('/cart');
  };

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
            <p className="text-md text-green-500 mt-2">${product.price.toFixed(2)}</p> {/* Show price with $ */}
            <button
              className="mt-4 py-2 px-4 bg-green-500 text-white rounded-lg w-full hover:bg-green-600 transition-colors"
              onClick={() => addToCart(product)} // Add to cart functionality
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
