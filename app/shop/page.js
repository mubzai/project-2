"use client"
import Header from '@/components/Header'
import Heading from '@/components/Heading'
import React, { useState } from 'react'

const page = () => {
  const [perPage, setPerPage] = useState(12)
  const [sortBy, setSortBy] = useState('best-match')
  const [view, setView] = useState('grid')

  return (
    <div>
      <Heading />
      <Header />
      <div className="container mx-auto p-4">
        {/* Heading */}
        <h1 className="mr-[500px] mt-[80px] text-4xl font-bold text-center mb-4">
          Shop List
        </h1>

        {/* Text below heading */}
   <p className="mr-[500px] text-lg text-center">
  Home.Pages.<span className="text-pink-500 hover:text-pink-500">Shoplist</span>
</p>

        {/* Filters Section */}
        <div className="mt-[300px] flex justify-between items-center mb-4 ">
          {/* Per Page Option */}
          <div className="flex items-center space-x-4 font-bold text-blue-800">
          Ecomerce Accesories & Fashion Item
          </div>

          {/* Sort By Option */}
          <div className="flex items-center space-x-4">
            <label htmlFor="sortBy" className="text-sm text-gray-700">Sort By:</label>
            <select
              id="sortBy"
              className="border px-3 py-2 rounded-md text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="best-match">Best Match</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          {/* View Option */}
          <div className="flex items-center space-x-4">
            <label htmlFor="view" className="text-sm text-gray-700">View:</label>
            <select
              id="view"
              className="border px-3 py-2 rounded-md text-sm"
              value={view}
              onChange={(e) => setView(e.target.value)}
            >
              <option value="grid">Grid</option>
              <option value="list">List</option>
            </select>
          </div>
        </div>

        {/* Results Count Section */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-600">About 9,620 results (0.62 seconds)</p>
        </div>

        {/* Product List */}
        <div className="space-y-8">
          {/* Product 1 */}
          <div className="flex items-center space-x-6 bg-white border border-gray-200 p-4 rounded-lg shadow-md">
            <img
              src="product1.jpg"
              alt="Product 1"
              className="w-40 h-40 object-cover rounded-lg"
            />
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Accumsan tincidunt</h3>
              <p className="text-gray-500 text-sm line-through">$52.00</p>
              <p className="text-gray-500 text-lg">$26.00</p>
              {/* Star Rating */}
              <div className="flex text-yellow-500">
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">☆</span>
              </div>
              <p className="text-sm text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
              </p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex items-center space-x-6 bg-white border border-gray-200 p-4 rounded-lg shadow-md">
            <img
              src="product2.jpg"
              alt="Product 2"
              className="w-40 h-40 object-cover rounded-lg"
            />
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Accumsan tincidunt</h3>
              <p className="text-gray-500 text-sm line-through">$60.00</p>
              <p className="text-gray-500 text-lg">$40.00</p>
              {/* Star Rating */}
              <div className="flex text-yellow-500">
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">☆</span>
                <span className="text-xl">☆</span>
              </div>
              <p className="text-sm text-gray-700">
                A great option for those who want comfort and style. Perfect for your home decor.
              </p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex items-center space-x-6 bg-white border border-gray-200 p-4 rounded-lg shadow-md">
            <img
              src="product3.jpg"
              alt="Product 3"
              className="w-40 h-40 object-cover rounded-lg"
            />
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Accumsan tincidunt</h3>
              <p className="text-gray-500 text-sm line-through">$70.00</p>
              <p className="text-gray-500 text-lg">$50.00</p>
              {/* Star Rating */}
              <div className="flex text-yellow-500">
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">☆</span>
              </div>
              <p className="text-sm text-gray-700">
                This product provides great value for money. You’ll love its design and functionality.
              </p>
            </div>
          </div>

          {/* Product 4 */}
          <div className="flex items-center space-x-6 bg-white border border-gray-200 p-4 rounded-lg shadow-md">
            <img
              src="product4.jpg"
              alt="Product 4"
              className="w-40 h-40 object-cover rounded-lg"
            />
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Accumsan tincidunt</h3>
              <p className="text-gray-500 text-sm line-through">$80.00</p>
              <p className="text-gray-500 text-lg">$60.00</p>
              {/* Star Rating */}
              <div className="flex text-yellow-500">
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">☆</span>
              </div>
              <p className="text-sm text-gray-700">
                A stylish and practical product. Perfect for modern living.
              </p>
            </div>
          </div>

          {/* Product 5 */}
          <div className="flex items-center space-x-6 bg-white border border-gray-200 p-4 rounded-lg shadow-md">
            <img
              src="product3.jpg"
              alt="Product 5"
              className="w-40 h-40 object-cover rounded-lg"
            />
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Accumsan tincidunt</h3>
              <p className="text-gray-500 text-sm line-through">$100.00</p>
              <p className="text-gray-500 text-lg">$75.00</p>
              {/* Star Rating */}
              <div className="flex text-yellow-500">
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">☆</span>
              </div>
              <p className="text-sm text-gray-700">
                Discover the amazing features of this product. Great for your daily needs.
              </p>
            </div>
          </div>

          {/* Product 6 */}
          <div className="flex items-center space-x-6 bg-white border border-gray-200 p-4 rounded-lg shadow-md">
            <img
              src="product1.jpg"
              alt="Product 6"
              className="w-40 h-40 object-cover rounded-lg"
            />
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Accumsan tincidunt</h3>
              <p className="text-gray-500 text-sm line-through">$120.00</p>
              <p className="text-gray-500 text-lg">$90.00</p>
              {/* Star Rating */}
              <div className="flex text-yellow-500">
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">☆</span>
              </div>
              <p className="text-sm text-gray-700">
                Elegant and well-crafted, this product will add a touch of sophistication to your home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
