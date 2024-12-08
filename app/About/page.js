import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Heading from '@/components/Heading'
import React from 'react'

const page = () => {
  return (
    <div>
      <Heading/>
      <Header/>
      <About/>
      <Footer/>
    </div>
  )
}

export default page