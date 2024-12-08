"use client"
import React from 'react';

const TrendingProducts = () => {
  const products = [
    {
      name: 'Product 1',
      image: '/trend1.jpg', // Replace with actual image paths
      price: '$32',
    },
    {
      name: 'Product 2',
      image: '/trend2.jpg', // Replace with actual image paths
      price: '$45',
    },
    {
      name: 'Product 3',
      image: '/trend3.jpg', // Replace with actual image paths
      price: '$28',
    },
    {
      name: 'Product 4',
      image: '/trend4.jpg', // Replace with actual image paths
      price: '$50',
    },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f3f4f6' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        Trending Products
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              textAlign: 'center',
              padding: '15px',
              height: '320px', // Smaller card height
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                maxHeight: '180px', // Smaller image height
                objectFit: 'cover', // Ensures the image fits nicely
              }}
            />
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}>
              {product.name}
            </h3>
            <p style={{ fontSize: '16px', color: '#4CAF50', marginTop: '5px' }}>
              {product.price}
            </p>
            <button
              style={{
                marginTop: '15px',
                padding: '8px 16px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px',
                alignSelf: 'center', // Center the button
              }}
              onClick={() => alert(`${product.name} added to cart`)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
