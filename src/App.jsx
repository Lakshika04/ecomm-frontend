import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import ProductSection from './sections/ProductSection'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ProductSection/>
    </div>
  )
}

export default App