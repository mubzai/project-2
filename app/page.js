
import Header from '@/components/Header'
import Heading from '@/components/Heading'

import React from 'react'
import FeatureProducts from '@/components/FeatureProducts'
import LatestProducts from '@/components/LatestProducts'
import ShopExOffer from '@/components/ShopExOffer'
import FutureComponent from '@/components/Future'
import TrendingProducts from '@/components/TrendingProducts'
import OfferBoxes from '@/components/OfferBoxes'
import DiscountItem from '@/components/Discountitem'
import TopCategories from '@/components/TopCatogries'
import Banner2 from '@/components/Banner2'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Heading/>
      <Header/>

      <div className="relative w-full h-[500px]">
  <img 
    src="/banner.jpg" 
    alt="Banner" 
    className="object-cover w-full h-full"
  />
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-end pb-8">
    <h1 className="text-white text-4xl md:text-6xl font-bold mb-4"></h1>
    <button 
      className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
    >
      Shop Now
    </button>
  </div>
</div>
<FeatureProducts/>
<LatestProducts/>
<ShopExOffer/>
<FutureComponent/>
<TrendingProducts/>
<OfferBoxes/>
<DiscountItem/>
<TopCategories/>
<Banner2/>
<Blog/>
<Footer/>
 
  
    </div>
  ) 
}

export default page
