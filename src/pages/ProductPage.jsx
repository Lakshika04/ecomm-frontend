import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Heart, Share2, Star, Plus, Minus, ShoppingCart } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { productAPI, cartAPI } from '../api'
import { useAuth } from '../context/AuthContext'

const ProductPage = () => {
  const { id } = useParams()
  const { isAuthenticated } = useAuth()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [addingToCart, setAddingToCart] = useState(false)

  useEffect(() => {
    fetchProduct()
  }, [id])

  const fetchProduct = async () => {
    try {
      const response = await productAPI.getProductById(id)
      const productData = response.singleProduct
      
      // Transform backend data to match frontend structure
      const transformedProduct = {
        ...productData,
        name: productData.title,
        brand: productData.category,
        originalPrice: Math.round(productData.price * 1.2),
        discount: 20,
        rating: 4.5,
        reviews: Math.floor(Math.random() * 200) + 50,
        sold: Math.floor(Math.random() * 500) + 100,
        images: productData.images && productData.images.length > 0 ? productData.images : ['/cloth.avif'],
        features: [
          'High-quality materials',
          'Durable construction',
          'Comfortable fit',
          'Easy maintenance',
          'Stylish design'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'Navy', 'Gray', 'Brown'],
        inStock: true,
        subcategory: productData.category
      }
      
      setProduct(transformedProduct)
    } catch (error) {
      console.error('Error fetching product:', error)
      setError('Product not found')
    } finally {
      setLoading(false)
    }
  }

  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState('Black')

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
        <Footer />
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <p className="text-red-600 text-lg">{error || 'Product not found'}</p>
          <Link to="/" className="mt-4 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change))
  }

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      alert('Please login to add items to cart')
      return
    }
    
    try {
      setAddingToCart(true)
      await cartAPI.addToCart(id, quantity)
      alert('Product added to cart successfully!')
    } catch (error) {
      console.error('Add to cart error:', error)
      alert('Failed to add product to cart')
    } finally {
      setAddingToCart(false)
    }
  }

  const relatedProducts = [
    {
      id: 2,
      name: 'Gentleman\'s Summer Gray Hat',
      price: 99000,
      originalPrice: 120000,
      image: '/tshirt.jpg',
      rating: 4.3
    },
    {
      id: 3,
      name: 'OptiZoom Camera Shoulder Bag',
      price: 250000,
      originalPrice: 300000,
      image: '/shoes.avif',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Cloudy Chic Grey Peep Toe Heeled Sandals',
      price: 270000,
      originalPrice: 320000,
      image: '/clothes.avif',
      rating: 4.6
    },
    {
      id: 5,
      name: 'UrbanEdge Men\'s Jeans Collection',
      price: 253000,
      originalPrice: 300000,
      image: '/cloth.avif',
      rating: 4.5
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-orange-500">Home</Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span>{product.subcategory}</span>
          <span>/</span>
          <span className="text-gray-800">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link to="/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img 
                src={product.images && product.images.length > 0 ? product.images[selectedImage] : '/cloth.avif'} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="flex space-x-2">
              {(product.images && product.images.length > 0 ? product.images : ['/cloth.avif']).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-orange-500' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-orange-500 font-medium">{product.brand}</span>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>

            {/* Rating and Reviews */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} 
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.rating})</span>
              </div>
              <span className="text-gray-500">|</span>
              <span className="text-gray-600">{product.reviews} Reviews</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-600">{product.sold} Sold</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-red-500">
                  Rp{product.price.toLocaleString()}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  Rp{product.originalPrice.toLocaleString()}
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                  {product.discount}% OFF
                </span>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-3">Size</h3>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedSize === size
                        ? 'border-orange-500 bg-orange-50 text-orange-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-3">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedColor === color
                        ? 'border-orange-500 bg-orange-50 text-orange-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-medium text-gray-800 mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-gray-600">Stock: 50+ available</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mb-8">
              <button 
                onClick={handleAddToCart}
                disabled={addingToCart}
                className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{addingToCart ? 'Adding...' : 'Add to Cart'}</span>
              </button>
              <button 
                onClick={handleAddToCart}
                disabled={addingToCart}
                className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {addingToCart ? 'Adding...' : 'Buy Now'}
              </button>
            </div>

            {/* Product Description */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-800 mb-3">Product Description</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              
              <h4 className="font-medium text-gray-800 mb-2">Features:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`} className="group">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">{relatedProduct.name}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg font-bold text-gray-800">
                        Rp{relatedProduct.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        Rp{relatedProduct.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="flex text-yellow-400">
                        {'★'.repeat(Math.floor(relatedProduct.rating))}
                      </div>
                      <span className="text-sm text-gray-500">({relatedProduct.rating})</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProductPage