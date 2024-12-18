import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-100 text-black py-12 px-6 w-full">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        
        {/* Left side: Logo and Email */}
        <div className="flex flex-col items-start gap-4 w-full lg:w-1/4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-[40px] font-bold">Hekto</h1>
          </div>

          {/* Email Sign Up */}
          <div className="flex flex-col sm:flex-row gap-4 sm:w-full lg:w-auto">
            <div className="flex-1">
              <label htmlFor="email" className="sr-only">Enter your email</label>
              <textarea
                id="email"
                className="border-2 border-gray-300 p-1 w-full sm:w-72 h-10 rounded-lg"
                placeholder="Enter your email here"
                rows="1"
              ></textarea>
            </div>
            <button
              className="bg-pink-600 text-white px-3 py-2 w-full sm:w-32 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mt-4 sm:mt-0"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Center: Categories, Customer Care, and Pages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-12 lg:gap-16 justify-between">
          {/* Customer Care Section */}
          <div>
            <h4 className="ml-9 font-semibold mb-4 text-lg">Customer Care</h4>
            <ul>
              <li><a href="#" className="ml-9 text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Contact Us</a></li>
              <li><a href="#" className="ml-9 text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">FAQ</a></li>
              <li><a href="#" className="ml-9 text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Support</a></li>
              <li><a href="#" className="ml-9 text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Return Policy</a></li>
              <li><a href="#" className="ml-9 text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Shipping Information</a></li>
              <li><a href="#" className="ml-9 text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Track Order</a></li>
            </ul>
          </div>

          {/* Pages Section */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Pages</h4>
            <ul>
              <li><a href="#" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Home</a></li>
              <li><a href="#" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">About Us</a></li>
              <li><a href="#" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Contact</a></li>
              <li><a href="#" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Blog</a></li>
              <li><a href="#" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Careers</a></li>
              <li><a href="#" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Categories</h4>
            <ul>
              <li><a href="#" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Electronics</a></li>
              <li><a href="#" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Clothing</a></li>
              <li><a href="#" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Home & Furniture</a></li>
              <li><a href="#" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Books</a></li>
              <li><a href="#" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Toys & Games</a></li>
              <li><a href="#" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Beauty & Health</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">&copy; 2024 Hekto. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
