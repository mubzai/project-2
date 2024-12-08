import React from 'react';

const FeatureProducts = () => {
  const products = [
    { id: 1, name: 'Cantilever chair', price: '$49.99', image: '/product1.jpg' },
    { id: 2, name: 'Cantilever chair', price: '$59.99', image: '/product2.jpg' },
    { id: 3, name: 'Cantilever chair', price: '$39.99', image: '/product3.jpg' },
    { id: 4, name: 'Cantilever chair', price: '$69.99', image: '/product4.jpg' },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-36 object-contain rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;