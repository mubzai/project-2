"use client"
import React from 'react';

const FutureComponent = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '20px', backgroundColor: '#f3f4f6' }}>
      {/* Left side: Photo */}
      <div style={{ flex: 1, marginRight: '20px' }}>
        <img
          src="/sofa.jpg" // Replace with your photo's path
          alt="Future Visual"
          style={{ borderRadius: '10px', width: '100%', height: 'auto', maxHeight: '400px' }}
        />
      </div>

      {/* Right side: Future Text */}
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Unique Features of Latest and Trending Product</h2>
        <ul style={{ color: '#4a4a4a', fontSize: '16px', listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>All frames constructed with hardwood solids and laminates</li>
          <li>Reinforced with double wood dowels, glue, screw-nails, corner blocks, and machine nails</li>
          <li>Arms, backs, and seats are structurally reinforced</li>
        </ul>

        {/* Add to Cart Button */}
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#E44CB9',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
          onClick={() => alert('Added to cart!')}
        >
          Add to Cart
        </button>

        {/* Product Name and Price */}
        <div style={{ marginTop: '20px', fontSize: '14px', fontWeight: 'bold'   }}>
          <p>B&B Italian Sofa</p>
          <p style={{ color: '#0B076F' }}>$32</p>
        </div>
      </div>
    </div>
  );
};

export default FutureComponent;
