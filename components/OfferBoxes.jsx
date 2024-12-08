import React from 'react';

const OfferBoxes = () => {
  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px', // Adjust the gap as needed
        opacity: '1', // Ensure opacity is 1 so that boxes are visible
        position: 'relative', // Ensure boxes are positioned relative to the parent
      }}
    >
      {/* First Box: 23% Off with Image on Right */}
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '15px',
          width: '420px', // Set width to 420px
          height: '270px', // Set height to 270px
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          overflow: 'hidden', // Prevents overflow
        }}
      >
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>23% Off in All Products</h3>
          <p style={{ fontSize: '14px', color: '#4CAF50', marginTop: '5px' }}>Shop Now</p>
        </div>
        <img
          src="/watch.jpg" // Replace with your image path
          alt="Offer 1"
          style={{
            width: '60px', // Adjusted image size
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </div>

      {/* Second Box: 23% Off with Image on Bottom */}
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '15px',
          width: '420px', // Set width to 420px
          height: '270px', // Set height to 270px
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflowWrap: 'break-word', // Make sure text doesn't overflow
          wordBreak: 'break-word', // Ensure text breaks within the box
          textAlign: 'center', // Center text properly
        }}
      >
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>23% Off in All Products</h3>
          <p style={{ fontSize: '14px', color: '#4CAF50', marginTop: '5px' }}>View Collection</p>
        </div>
        <img
          src="/book.jpg" // Replace with your image path
          alt="Offer 2"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            marginTop: '10px',
            maxHeight: '120px', // Adjusted image size to ensure it's not too big
            objectFit: 'cover', // Ensures the image fits properly
          }}
        />
      </div>

      {/* Third Box: Product Details with Small Images and Price beside each */}
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '15px',
          width: '420px', // Set width to 420px
          height: '270px', // Set height to 270px
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          {/* First Image with Price */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="/product1.jpg" // Replace with your image path
              alt="Product 1"
              style={{
                width: '40px', // Adjusted image size
                height: 'auto',
                borderRadius: '8px',
              }}
            />
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Executive Seat Chair</span>
            <span style={{ fontSize: '14px', color: '#4CAF50' }}>$32.00</span>
          </div>
          {/* Second Image with Price */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="/product2.jpg" // Replace with your image path
              alt="Product 2"
              style={{
                width: '40px', // Adjusted image size
                height: 'auto',
                borderRadius: '8px',
              }}
            />
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Executive Seat Chair</span>
            <span style={{ fontSize: '14px', color: '#4CAF50' }}>$32.00</span>
          </div>
          {/* Third Image with Price */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="/product3.jpg" // Replace with your image path
              alt="Product 3"
              style={{
                width: '40px', // Adjusted image size
                height: 'auto',
                borderRadius: '8px',
              }}
            />
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Executive Seat Chair</span>
            <span style={{ fontSize: '14px', color: '#4CAF50' }}>$32.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBoxes;
