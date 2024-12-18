import React from 'react';

const OfferBoxes = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {/* First Box: 23% Off with Image on Right */}
      <div className="bg-white rounded-lg shadow-md p-4 h-64 flex flex-row items-center justify-between overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <div>
          <h3 className="text-xl font-semibold">23% Off in All Products</h3>
          <p className="text-sm text-green-500 mt-2">Shop Now</p>
        </div>
        <img
          src="/watch.jpg" // Replace with your image path
          alt="Offer 1"
          className="w-16 h-auto rounded-lg"
        />
      </div>

      {/* Second Box: 23% Off with Image on Bottom */}
      <div className="bg-white rounded-lg shadow-md p-4 h-64 flex flex-col items-center justify-center text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <div>
          <h3 className="text-xl font-semibold">23% Off in All Products</h3>
          <p className="text-sm text-green-500 mt-2">View Collection</p>
        </div>
        <img
          src="/book.jpg" // Replace with your image path
          alt="Offer 2"
          className="w-full max-h-32 mt-4 rounded-lg object-cover"
        />
      </div>

      {/* Third Box: Product Details with Small Images and Price beside each */}
      <div className="bg-white rounded-lg shadow-md p-4 h-64 flex flex-col items-center justify-center gap-4 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <div className="flex flex-col gap-3 w-full">
          {/* First Image with Price */}
          <div className="flex items-center gap-3 w-full">
            <img
              src="/product1.jpg" // Replace with your image path
              alt="Product 1"
              className="w-10 h-auto rounded-lg"
            />
            <span className="text-sm font-semibold">Executive Seat Chair</span>
            <span className="text-sm text-green-500">$32.00</span>
          </div>
          {/* Second Image with Price */}
          <div className="flex items-center gap-3 w-full">
            <img
              src="/product2.jpg" // Replace with your image path
              alt="Product 2"
              className="w-10 h-auto rounded-lg"
            />
            <span className="text-sm font-semibold">Executive Seat Chair</span>
            <span className="text-sm text-green-500">$32.00</span>
          </div>
          {/* Third Image with Price */}
          <div className="flex items-center gap-3 w-full">
            <img
              src="/product3.jpg" // Replace with your image path
              alt="Product 3"
              className="w-10 h-auto rounded-lg"
            />
            <span className="text-sm font-semibold">Executive Seat Chair</span>
            <span className="text-sm text-green-500">$32.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBoxes;
