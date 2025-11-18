import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import ProductSection from './sections/ProductSection'
import TopRatedproduct from './sections/TopRatedproduct'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ProductSection/>
      <TopRatedproduct/>
    </div>
  )
}

export default App