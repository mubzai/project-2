"use client"
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const page = () => {
  const [cart, setCart] = useState([]);

  // Define some random product options
  const products = [
    { name: "Playwood Arm Chair", price: 32.00, colors: ["Brown", "Black", "White"], sizes: ["XL", "L", "M"] },
    { name: "Modern Wooden Chair", price: 45.00, colors: ["Red", "Green", "Blue"], sizes: ["M", "S", "L"] },
    { name: "Ergonomic Desk Chair", price: 65.00, colors: ["Black", "Gray", "Blue"], sizes: ["S", "M", "L"] },
    { name: "Luxurious Recliner", price: 120.00, colors: ["Brown", "Beige", "Gray"], sizes: ["XL", "L"] },
  ];

  // Function to add a random product to the cart
  const addRandomProductToCart = () => {
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomColor = randomProduct.colors[Math.floor(Math.random() * randomProduct.colors.length)];
    const randomSize = randomProduct.sizes[Math.floor(Math.random() * randomProduct.sizes.length)];

    const cartItem = {
      name: randomProduct.name,
      price: randomProduct.price,
      color: randomColor,
      size: randomSize,
      quantity: 1,
    };

    setCart([...cart, cartItem]);
  };

  // Calculate total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
        <Header/>
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
      </div>
      <div className="flex">
        {/* Cart Items */}
        <div className="flex-1 mb-6">
          {cart.length > 0 ? (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600">Color: {item.color}</p>
                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-xl text-gray-700">${item.price}</p>
                    <div className="ml-4 text-sm text-gray-600">x {item.quantity}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </div>

        {/* Cart Totals (Right Side) */}
        <div className="w-1/3 ml-8">
          <div className="space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
              <p>Subtotals:</p>
              <p className="text-gray-700">${calculateTotal().toFixed(2)}</p>
            </div>

            {/* Shipping & Taxes */}
            <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
              <p>Shipping & Taxes:</p>
              <p className="text-gray-700">Calculated at checkout</p>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center text-xl font-semibold text-gray-800">
              <p>Total:</p>
              <p className="text-gray-700">${calculateTotal().toFixed(2)}</p>
            </div>

            {/* Checkout Button */}
            <div className="flex justify-between">
              <button className="bg-green-500 text-white px-6 py-2 rounded-md shadow-md">
              <a href="/orderdone" > Proceed to Checkout
                
              </a>
              </button>
              <button className="bg-gray-200 text-gray-600 px-6 py-2 rounded-md shadow-md hover:bg-gray-300">
                Clear Cart
              </button>
            </div>
          </div>

          {/* Shipping Details */}
          <div className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Shipping Information</h2>

            <div className="flex justify-between items-center text-gray-700">
              <label htmlFor="country" className="w-1/4">Country:</label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Enter your country"
                className="w-3/4 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex justify-between items-center text-gray-700">
              <label htmlFor="city" className="w-1/4">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter your city"
                className="w-3/4 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex justify-between items-center text-gray-700">
              <label htmlFor="postal" className="w-1/4">Postal Code:</label>
              <input
                type="text"
                id="postal"
                name="postal"
                placeholder="Enter postal code"
                className="w-3/4 p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add Random Product Button */}
      <div className="mt-6">
        <button
          onClick={addRandomProductToCart}
          className="bg-green-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-700"
        >
          Add Random Product to Cart
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default page;
