import React from 'react'
import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'
import CategoryNav from '../components/CategoryNav'
import FlashSaleSection from '../components/FlashSaleSection'
import TodaysForYou from '../components/TodaysForYou'
import BestSellingStore from '../components/BestSellingStore'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroBanner />
      <CategoryNav />
      <FlashSaleSection />
      <TodaysForYou />
      <BestSellingStore />
      <Footer />
    </div>
  )
}

export default HomePage