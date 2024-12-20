"use client";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import React, { useState } from 'react';
import Link from 'next/link';

const Heading = () => {
  const [language, setLanguage] = useState('English');
  const [currency, setCurrency] = useState('USD');

  const handleLanguageChange = (e) => setLanguage(e.target.value);
  const handleCurrencyChange = (e) => setCurrency(e.target.value);

  return (
    <div>
      {/* Heading bar with language, currency, and login options */}
      <div className="bg-purple-800 text-white py-2">
        <div className="flex justify-between items-center px-4">
          {/* Left side: Email and Phone */}
          <p className="text-sm">
            email@example.com | (123) 456-7890
          </p>
          
          {/* Right side: Language, Currency, Login, Wishlist */}
          <div className="flex space-x-4">
            {/* Language dropdown */}
            <select
              value={language}
              onChange={handleLanguageChange}
              className="bg-transparent text-white border-none outline-none cursor-pointer"
              aria-label="Select Language"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              {/* Add more languages as needed */}
            </select>

            {/* Currency dropdown */}
            <select
              value={currency}
              onChange={handleCurrencyChange}
              className="bg-transparent text-white border-none outline-none cursor-pointer"
              aria-label="Select Currency"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              {/* Add more currencies as needed */}
            </select>

            {/* Login and Wishlist with Links */}
            <div className="flex items-center space-x-4 text-sm">
      <Link href="/login" className="hover:underline" aria-label="Login">
        Login
      </Link>
      |
      <Link href="/Wishlist" className="hover:underline" aria-label="Wishlist">
        Wishlist
      </Link>
      
      <Link href="/cart" className="hover:underline" aria-label="Cart">
        <AiOutlineShoppingCart size={24} color="white" />
      </Link>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
