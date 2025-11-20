import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import ProductSection from './sections/ProductSection'
import TopRatedproduct from './sections/TopRatedproduct'
import ClothesSection from './sections/ClothesSection'
import FlashSale from './sections/FlashSale'
import TodayForYou from './sections/TodayForYou'

const App = () => {

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ProductSection/>
      <TopRatedproduct/>
      <ClothesSection/>
      <FlashSale/>
      <TodayForYou/>
    </div>
  )
}

export default App