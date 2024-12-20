import Header from '@/components/Header';
import Heading from '@/components/Heading';
import React from 'react';
import FeatureProducts from '@/components/FeatureProducts';
import LatestProducts from '@/components/LatestProducts';
import ShopExOffer from '@/components/ShopExOffer';
import FutureComponent from '@/components/Future';
import TrendingProducts from '@/components/TrendingProducts';
import OfferBoxes from '@/components/OfferBoxes';
import DiscountItem from '@/components/Discountitem';
import TopCategories from '@/components/TopCatogries';
import Banner2 from '@/components/Banner2';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div>
      <Heading />
      <Header />

      {/* Front Page Banner with two images and text in the middle */}
      <div className="relative w-full h-[500px] flex items-center justify-between">
        {/* Left Image (banner.jpg) */}
        <div className="w-1/3 h-full">
          <img
            src="/banner.jpg"
            alt="Left Banner"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Middle Text */}
        <div className="flex flex-col items-center justify-center text-center w-1/3">
          <h1 className="text-pink-600 text-1xl md:text-2xl font-Lato mb-4">
            Best Furniture For Your Castle....
          </h1>
         <p className="text-black text-4xl font-bold mb-4">
            New Furniture Collection
            
            Trends in 2020
</p>
          <p className=" text-gray-500 text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
          </p>
          <button className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md  transition">
            Shop Now
          </button>
        </div>

        {/* Right Image (banner3.jpg) */}
        <div className="w-1/3 h-full">
          <img
            src="/banner3.jpg"
            alt="Right Banner"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Other Components */}
      <FeatureProducts />
      <LatestProducts />
      <ShopExOffer />
      <FutureComponent />
      <TrendingProducts />
      <OfferBoxes />
      <DiscountItem />
      <TopCategories />
      <Banner2 />
      <Blog />
      <Footer />
    </div>
  );
};

export default page;
