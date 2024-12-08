import React from 'react';

const LatestProducts = () => {
  const products = [
    { id: 1, name: 'Cantilever chair', price: '$29.99', image: '/new1.jpg' },
    { id: 2, name: 'Cantilever chair', price: '$39.99', image: '/new2.jpg' },
    { id: 3, name: 'Cantilever chair', price: '$19.99', image: '/new3.jpg' },
    { id: 4, name: 'Cantilever chair', price: '$49.99', image: '/new1.jpg' },
    { id: 5, name: 'Cantilever chair', price: '$59.99', image: '/new2.jpg' },
    { id: 6, name: 'Cantilever chair', price: '$69.99', image: '/new3.jpg' },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">Latest Products</h2>
      
      {/* New Section: Words List */}
      <div className="flex justify-center gap-4 mb-6 text-center">
        <span className="text-sm font-semibold px-4 py-2 bg-gray-200 rounded-lg text-blue-900 hover:bg-pink-500">New Arrival</span>
        <span className="text-sm font-semibold px-4 py-2 bg-gray-200 rounded-lg text-blue-900 hover:bg-pink-500">Best Seller</span>
        <span className="text-sm font-semibold px-4 py-2 bg-gray-200 rounded-lg text-blue-900 hover:bg-pink-500">Featured</span>
        <span className="text-sm font-semibold px-4 py-2 bg-gray-200 rounded-lg text-blue-900 hover:bg-pink-500">Special Offer</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg text-blue-900 p-4 shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-24 object-contain rounded-md mb-4" />
            <h3 className="text-lg text-blue-900 font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;