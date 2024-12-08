import React from 'react';

const TopCategories = () => {
  const categories = [
    {
      name: 'Wood Chair',
      price: '$120',
      image: '/trend1.jpg', // Replace with your image path
    },
    {
      name: 'Plastic Chair',
      price: '$85',
      image: '/trend2.jpg', // Replace with your image path
    },
    {
      name: 'Sofa Collection',
      price: '$350',
      image: '/trend3.jpg', // Replace with your image path
    },
    {
      name: 'Dining Table',
      price: '$240',
      image: '/trend4.jpg', // Replace with your image path
    },
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        Top Categories
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px', // Reduced gap
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              textAlign: 'center',
              padding: '10px', // Adjusted padding
            }}
          >
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                overflow: 'hidden',
                margin: '0 auto',
                border: '2px solid #ddd',
              }}
            >
              <img
                src={category.image}
                alt={category.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '10px' }}>
              {category.name}
            </h3>
            <p style={{ fontSize: '14px', color: '#4CAF50', marginTop: '5px' }}>
              {category.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
