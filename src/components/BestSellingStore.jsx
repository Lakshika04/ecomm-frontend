import React from 'react'

const BestSellingStore = () => {
  const stores = [
    {
      name: 'Nike Sao Mall',
      description: 'Toko Sepatu & Baju',
      products: [
        { name: 'Nike Air Max', price: 'Rp500.000', image: '/shoes.avif' },
        { name: 'Nike T-Shirt', price: 'Rp270.000', image: '/tshirt.jpg' },
        { name: 'Nike Cap', price: 'Rp99.000', image: '/cloth.avif' },
        { name: 'Nike Jacket', price: 'Rp334.000', image: '/clothes.avif' },
        { name: 'Nike Shorts', price: 'Rp199.000', image: '/shoes.avif' },
        { name: 'Nike Socks', price: 'Rp150.000', image: '/tshirt.jpg' }
      ]
    },
    {
      name: 'Barudak Disaster Mall',
      description: 'Multimedia dan Teknologi',
      products: [
        { name: 'Smartphone', price: 'Rp179.000', image: '/cloth.avif' },
        { name: 'Headphones', price: 'Rp199.000', image: '/clothes.avif' },
        { name: 'Tablet', price: 'Rp253.000', image: '/shoes.avif' },
        { name: 'Laptop', price: 'Rp250.000', image: '/tshirt.jpg' },
        { name: 'Camera', price: 'Rp162.000', image: '/cloth.avif' },
        { name: 'Speaker', price: 'Rp255.000', image: '/clothes.avif' }
      ]
    },
    {
      name: 'Galaxy Galleria Mall',
      description: 'Toko Elektronik',
      products: [
        { name: 'Smart TV', price: 'Rp179.000', image: '/shoes.avif' },
        { name: 'Refrigerator', price: 'Rp199.000', image: '/tshirt.jpg' },
        { name: 'Washing Machine', price: 'Rp253.000', image: '/cloth.avif' },
        { name: 'Air Conditioner', price: 'Rp250.000', image: '/clothes.avif' },
        { name: 'Microwave', price: 'Rp162.000', image: '/shoes.avif' },
        { name: 'Blender', price: 'Rp255.000', image: '/tshirt.jpg' }
      ]
    },
    {
      name: 'Aurora West Mall',
      description: 'Toko Sepatu Sneakers',
      products: [
        { name: 'Adidas Shoes', price: 'Rp179.000', image: '/cloth.avif' },
        { name: 'Puma Sneakers', price: 'Rp199.000', image: '/clothes.avif' },
        { name: 'Converse', price: 'Rp253.000', image: '/shoes.avif' },
        { name: 'Vans', price: 'Rp250.000', image: '/tshirt.jpg' },
        { name: 'New Balance', price: 'Rp162.000', image: '/cloth.avif' },
        { name: 'Reebok', price: 'Rp255.000', image: '/clothes.avif' }
      ]
    }
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Best Selling Store</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - BeliBeli Mall */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">B</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">BeliBeli Mall</h3>
                <p className="text-gray-600">Shop, Explore, Delight and Experience Mall Magic!</p>
              </div>
            </div>
          </div>

          {/* Right side - Store grids */}
          <div className="grid grid-cols-2 gap-4">
            {stores.map((store, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 border-b">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{store.name[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">{store.name}</h4>
                      <p className="text-xs text-gray-500">{store.description}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1 p-2">
                  {store.products.slice(0, 6).map((product, productIndex) => (
                    <div key={productIndex} className="text-center">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-16 object-cover rounded mb-1"
                      />
                      <p className="text-xs text-gray-600 truncate">{product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestSellingStore