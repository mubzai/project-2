"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Banner = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/shop'); // Redirect to the shop page
  };

  return (
    <div
      className="bg-cover bg-center text-white text-center p-10 rounded-lg mb-5"
      style={{ backgroundImage: 'url(/banner2.jpg)' }}
    >
      <h2 className="text-3xl font-bold mb-3 text-blue-500">
        Get Latest Updates by Subscribing to Our Newsletter
      </h2>
      <p className="text-lg mb-5 text-blue-400">
        Stay up to date with the latest products and offers. Subscribe now!
      </p>
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-pink-500 text-white rounded-md text-lg cursor-pointer hover:bg-pink-600"
      >
        Shop Now
      </button>
    </div>
  );
};

export default Banner;
