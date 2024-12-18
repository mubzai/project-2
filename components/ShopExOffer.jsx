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
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">What ShopEx Offers</h2>
      <div className="flex justify-center flex-wrap gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="border rounded-lg p-6 shadow-md w-full sm:w-1/2 md:w-1/4 text-center hover:bg-blue-50 transition-colors">
            <div className="mb-4 text-blue-900">
              {offer.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
            <p className="text-sm text-gray-700">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopExOffer;
