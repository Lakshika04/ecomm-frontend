import React, { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { productAPI } from '../api'

const TodaysForYou = () => {
  const [activeFilter, setActiveFilter] = useState('Best Seller')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
  const filters = [
    'Best Seller',
    'Keep Stylish', 
    'Special Discount',
    'Official Store',
    'Coveted Product'
  ]

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await productAPI.getAllProducts()
      setProducts(response.productss || [])
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with Filters */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Today's For You!</h2>
          <div className="flex space-x-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  activeFilter === filter
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.length > 0 ? products.map((product) => {
              const originalPrice = Math.round(product.price * 1.15)
              const rating = (Math.random() * 2 + 3).toFixed(1)
              const sold = Math.floor(Math.random() * 200) + 50
              
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
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">{product.title}</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg font-bold text-gray-800">
                          Rp{product.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          Rp{originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <div className="flex text-yellow-400">
                            {'★'.repeat(Math.floor(rating))}
                          </div>
                          <span className="text-sm text-gray-500">({rating})</span>
                        </div>
                        <span className="text-xs text-gray-500">{sold} sold</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            }) : (
              <div className="col-span-4 text-center py-8">
                <p className="text-gray-500">No products available</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default TodaysForYou