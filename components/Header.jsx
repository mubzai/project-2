 "use client";
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex-shrink-0 text-xl font-bold text-gray-800">
          Hekto
        </div>

        {/* Centered Navigation Links */}
        <div className="flex-grow flex justify-center">
          <ul
            className={`${
              isOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 bg-gray-100 md:bg-transparent text-gray-700`}
          >
            <li>
              <a href="http://localhost:3000/" className="block px-4 py-2 hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="/Checkout" className="block px-4 py-2 hover:text-blue-500">
                Checkout
              </a>
            </li>
            <li>
              <a href="/Product" className="block px-4 py-2 hover:text-blue-500">
                Product
              </a>
            </li>
            <li>
              <a href="/About" className="block px-4 py-2 hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="/shop" className="block px-4 py-2 hover:text-blue-500">
                Shop
              </a>
            </li>
            <li>
              <a href="/Contact" className="block px-4 py-2 hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
        <FaSearch />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-gray-800 text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Header;
