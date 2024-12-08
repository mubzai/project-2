"use client"
import React from 'react';

const DiscountItem = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/* Heading */}
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        Discount Item
      </h2>

      {/* Product Categories */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '20px',
        }}
      >
        <span
          style={{
            cursor: 'pointer',
            padding: '5px 10px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'pink')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Wood Chair
        </span>
        <span
          style={{
            cursor: 'pointer',
            padding: '5px 10px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'pink')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Plastic Chair
        </span>
        <span
          style={{
            cursor: 'pointer',
            padding: '5px 10px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'pink')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Sofa Collection
        </span>
      </div>

      {/* Hover Box */}
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          width: '80%',
          margin: '0 auto',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          transition: 'background-color 0.3s ease',
        }}
      >
        {/* Left Side Content */}
        <div style={{ flex: 1 }}>
          {/* Discount Text */}
          <p style={{ fontSize: '16px', color: '#151875', fontWeight: 'bold' }}>
            20% Discount of All Products
          </p>

          {/* Description */}
          <h3 style={{ fontSize: '18px',  color: '#FE20CA', fontWeight: 'bold', marginBottom: '10px' }}>
            Eams Sofa Compact
          </h3>
          <p style={{ fontSize: '16px', marginBottom: '15px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum
            condimentum.
          </p>
          <p style={{ fontSize: '16px', marginBottom: '15px' }}>
            Material exposed like metals, simple neutral colours, clear lines, and geometric figures.
          </p>

          {/* Features List */}
          <ul style={{ marginBottom: '20px', fontSize: '16px' }}>
            <li>✓ Clear lines and geometric figures</li>
            <li>✓ Material exposed like metals</li>
          </ul>

          {/* Shop Now Button */}
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: 'pink',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Shop Now
          </button>
        </div>

        {/* Right Side Image */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src="/sofa1.jpg" // Replace with your image path
            alt="Eams Sofa Compact"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '300px',
              borderRadius: '8px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountItem;