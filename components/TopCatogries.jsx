import React from 'react';

const TopCategories = () => {
  const categories = [
    {
      name: 'Wood Chair',
      price: '$120',
      image: '/trend1.jpg',
    },
    {
      name: 'Plastic Chair',
      price: '$85',
      image: '/trend2.jpg',
    },
    {
      name: 'Sofa Collection',
      price: '$350',
      image: '/trend3.jpg',
    },
    {
      name: 'Dining Table',
      price: '$240',
      image: '/trend4.jpg',
    },
  ];

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">Top Categories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="text-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-2 border-gray-300">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">{category.name}</h3>
            <p className="text-sm text-green-600 mt-2">{category.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
