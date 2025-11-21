import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { productAPI } from '../api'

const FlashSaleSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 17,
    seconds: 56
  })
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await productAPI.getAllProducts()
      const flashSaleProducts = response.productss?.slice(0, 4) || []
      setProducts(flashSaleProducts)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const calculateDiscount = (price, originalPrice) => {
    if (!originalPrice || originalPrice <= price) return '0% Off'
    const discount = Math.round(((originalPrice - price) / originalPrice) * 100)
    return `${discount}% Off`
  }



  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">⚡</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Flash Sale</h2>
            <div className="flex items-center space-x-2">
              <div className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold min-w-[32px] text-center">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span className="text-xl font-bold">:</span>
              <div className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold min-w-[32px] text-center">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span className="text-xl font-bold">:</span>
              <div className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold min-w-[32px] text-center">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 bg-black text-white rounded-lg hover:bg-gray-800">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.length > 0 ? products.map((product) => {
              const originalPrice = Math.round(product.price * 1.2) // Simulate original price
              const discount = calculateDiscount(product.price, originalPrice)
              
              return (
                <Link key={product._id} to={`/product/${product._id}`} className="group">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={product.images && product.images.length > 0 ? product.images[0] : '/cloth.avif'} 
                        alt={product.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                      />
                      <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                        <Heart className="w-4 h-4" />
                      </button>
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                        {discount}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">{product.title}</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg font-bold text-red-500">
                          Rp{product.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          Rp{originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <div className="flex text-yellow-400">
                            {'★'.repeat(5)}
                          </div>
                          <span className="text-sm text-gray-500">(4.5)</span>
                        </div>
                        <span className="text-xs text-gray-500">In Stock</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            }) : (
              <div className="col-span-4 text-center py-8">
                <p className="text-gray-500">No products available for flash sale</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default FlashSaleSection