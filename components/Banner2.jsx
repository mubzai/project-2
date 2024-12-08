"use client"
import React from 'react';

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/banner2.jpg)', // Set the background image
        backgroundSize: 'cover', // Ensure the image covers the entire container
        backgroundPosition: 'center', // Center the background image
        color: '#fff', // Text color
        textAlign: 'center',
        padding: '40px 20px',
        borderRadius: '8px',
        marginBottom: '20px', // Optional, adds space below the banner
      }}
    >
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px', color: 'blue' }}>
        Get Latest Updates by Subscribing to Our Newsletter
      </h2>
      <p style={{ fontSize: '18px', marginBottom: '20px', color: 'blue' }}>
        Stay up to date with the latest products and offers. Subscribe now!
      </p>
      <button
        style={{
          padding: '12px 30px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: 'pink', // Set the button color to pink
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => alert('You clicked Shop Now!')}
      >
        Shop Now
      </button>
    </div>
  );
};

export default Banner;
