import React from 'react'

const About = () => {

  const featured = [
    { id: 1, title: '24/7 Delivery', description: 'Round-the-clock delivery anytime, anywhere.', image: '/24hours.png'},
    { id: 2, title: 'Free Shipping', description: 'Free shipping on orders above $50.', image: '/cashback.png' },
    { id: 3, title: 'Easy Returns', description: 'Hassle-free returns within 30 days.', image: '/premium.png'},
    { id: 4, title: 'Secure Payment', description: 'Transactions secured with encryption.', image: '/truck.png'},
  ];
  return (
    <div>
      {/* about start*/}
      <div className="h-[286px] w-full bg-[#F6F5FF]">
        <div className="inline-block ml-[200px] mt-[97px]">
          <h1 className="text-2xl font-bold text-[#101750]">About Us</h1>
          <div className="inline-block text-gray-500">
            Home.Pages.<span className="text-[#FB2E86]">About</span>
          </div>
        </div>
      </div>

        {/* second part */}
        <div className=' mx-[200px] flex flex-row my-10 gap-10'>
            <div className=''>
                <img src="/chinese.jpg" alt="" className='w-[400px] h-[290px]'/>
            </div>
            <div className='space-y-4'>
                <h1 className='text-[32px] text-[#151875] font-semibold'>Know About Our Ecomerce <br />
                Business, History</h1>
                <p className='text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. 
                  Mattis neque ultrices mattis aliquam, malesuada <br />diam est. 
                  Malesuada sem tristique amet erat vitae <br /> eget dolor lobortis.
                  Accumsan faucibus vitae lobortis <br /> quis bibendum quam.</p>
                <button className='py-2 px-4 bg-pink-500 text-white'>Contact us</button>
            </div>
        </div>

        {/* featured proeduct */}
        <div className="p-4 my-14">
          <h2 className="text-lg font-bold mb-4 text-center text-blue-900">Our Features</h2>
          <div className="flex justify-center space-x-4">
            {featured.map((featured) => (
              <div key={featured.id} className="border rounded-lg p-4 shadow-md w-40 text-center">
                <div className="mb-4 pl-7">
                  <img src={featured.image} alt="" />
                  </div>
                    <h3 className="text-base font-semibold">{featured.title}</h3>
                    <p className="text-sm text-gray-700">{featured.description}</p>
                  </div>
                  ))}
              </div>
          </div>
       </div>

      //  our client
      
  )
}

export default About