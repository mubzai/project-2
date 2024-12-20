"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  // Load the cart from localStorage when the component is mounted
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Calculate the subtotal of the cart
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  };

  // Calculate the total price including tax (example 10% tax)
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = subtotal * 0.1; // Example 10% tax
    return subtotal + tax;
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Update the quantity of a specific item in the cart
  const updateQuantity = (index, change) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += change;
    if (updatedCart[index].quantity < 1) {
      updatedCart[index].quantity = 1; // Ensure quantity doesn't go below 1
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Update the cart in localStorage and notify the user
  const updateCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Cart updated successfully!");
  };

  return (
    <div> <Heading/>
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items (Left side) */}
        <div className="flex-1 space-y-6">
          {cart.length > 0 ? (
            <div className="space-y-4">
              {/* Table for Cart Items */}
              <div className="border-b pb-4">
                <div className="grid grid-cols-4 gap-4 text-lg font-semibold text-gray-800">
                  <p>Product</p>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Total</p>
                </div>
                {cart.map((item, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 items-center border-b py-4">
                    <div>
                      <h3 className="text-sm text-gray-800">{item.name}</h3>
                    </div>
                    <div className="text-gray-600">${parseFloat(item.price).toFixed(2)}</div> {/* Correct price display */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        className="bg-gray-300 px-2 py-1 rounded-md text-sm"
                      >
                        -
                      </button>
                      <span className="text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="bg-gray-300 px-2 py-1 rounded-md text-sm"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-gray-600">${(parseFloat(item.price) * item.quantity).toFixed(2)}</div> {/* Correct total price */}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-600 text-center">Your cart is empty.</p>
          )}

          {/* Buttons below product details, aligned on opposite sides */}
          <div className="flex justify-between mt-6">
            <div className="flex space-x-4">
              <button
                onClick={updateCart}
                className="bg-pink-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-pink-600 w-1/2"
              >
                Update Cart
              </button>
              <button
                onClick={clearCart}
                className="bg-pink-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-pink-600 w-1/2"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>

        {/* Total Information (Right side) */}
        <div className="lg:w-1/3 space-y-6 mt-6 lg:mt-0">
          <div className="space-y-4">
            <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
              <p>Subtotal:</p>
              <p className="text-gray-700">${calculateSubtotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
              <p>Total (with tax):</p>
              <p className="text-gray-700">${calculateTotal().toFixed(2)}</p>
            </div>
          </div>

          <button
            onClick={() => router.push("/shipping")}
            className="bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 w-full"
          >
            Proceed to Shipping
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
