import React from 'react';
import { FaTruck, FaShippingFast, FaUndo, FaLock } from 'react-icons/fa'; // Import the necessary icons

const ShopExOffer = () => {
  const offers = [
    { id: 1, title: '24/7 Delivery', description: 'Round-the-clock delivery anytime, anywhere.', icon: <FaTruck size={30} /> },
    { id: 2, title: 'Free Shipping', description: 'Free shipping on orders above $50.', icon: <FaShippingFast size={30} /> },
    { id: 3, title: 'Easy Returns', description: 'Hassle-free returns within 30 days.', icon: <FaUndo size={30} /> },
    { id: 4, title: 'Secure Payment', description: 'Transactions secured with encryption.', icon: <FaLock size={30} /> },
  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4 text-center text-blue-900">What ShopEx Offers</h2>
      <div className="flex justify-center space-x-4">
        {offers.map((offer) => (
          <div key={offer.id} className="border rounded-lg p-4 shadow-md w-40 text-center">
            <div className="mb-4">
              {offer.icon}
            </div>
            <h3 className="text-base font-semibold">{offer.title}</h3>
            <p className="text-sm text-gray-700">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopExOffer;
