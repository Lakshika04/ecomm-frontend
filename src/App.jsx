import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import ProductSection from './sections/ProductSection'
import TopRatedproduct from './sections/TopRatedproduct'
import ClothesSection from './sections/ClothesSection'

const App = () => {

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ProductSection/>
      <TopRatedproduct/>
      <ClothesSection/>
    </div>
  )
}

export default App