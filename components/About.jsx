import React from 'react';

const About = () => {

  const featured = [
    { id: 1, title: '24/7 Delivery', description: 'Round-the-clock delivery anytime, anywhere.', image: '/24hours.png' },
    { id: 2, title: 'Free Shipping', description: 'Free shipping on orders above $50.', image: '/cashback.png' },
    { id: 3, title: 'Easy Returns', description: 'Hassle-free returns within 30 days.', image: '/premium.png' },
    { id: 4, title: 'Secure Payment', description: 'Transactions secured with encryption.', image: '/truck.png' },
  ];

  return (
    <div>
      {/* About Header */}
      <div className="h-[286px] w-full bg-[#F6F5FF]">
        <div className="inline-block ml-[20px] sm:ml-[50px] mt-[97px]">
          <h1 className="text-2xl font-bold text-[#101750]">About Us</h1>
          <div className="inline-block text-gray-500">
            Home.Pages.<span className="text-[#FB2E86]">About</span>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="mx-[20px] sm:mx-[50px] flex flex-col sm:flex-row my-10 gap-10">
        <div className="w-full sm:w-[400px]">
          <img src="/chinese.jpg" alt="About Us" className="w-full h-[290px] object-cover"/>
        </div>
        <div className="space-y-4 flex-1">
          <h1 className="text-[32px] text-[#151875] font-semibold">
            Know About Our Ecommerce <br />
            Business, History
          </h1>
          <p className="text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mattis neque ultrices mattis aliquam, malesuada diam est.
            Malesuada sem tristique amet erat vitae eget dolor lobortis.
            Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>
          <button className="py-2 px-4 bg-pink-500 text-white mt-4">Contact Us</button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="p-4 my-14">
        <h2 className="text-lg font-bold mb-4 text-center text-blue-900">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 shadow-md text-center">
              <div className="mb-4">
                <img src={item.image} alt={item.title} className="mx-auto"/>
              </div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Clients Section (optional) */}
      {/* Add any other sections if needed */}

    </div>
  );
}

export default About;
