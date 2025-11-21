import React from 'react'

const CategoryNav = () => {
  const categories = [
    { name: 'T-shirt', icon: '👕' },
    { name: 'Jacket', icon: '🧥' },
    { name: 'Shirt', icon: '👔' },
    { name: 'Jeans', icon: '👖' },
    { name: 'Bag', icon: '👜' },
    { name: 'Shoes', icon: '👟' },
    { name: 'Watches', icon: '⌚' },
    { name: 'Cap', icon: '🧢' },
    { name: 'All Category', icon: '📱' }
  ]

  return (
    <div className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-12">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center cursor-pointer hover:text-orange-500 transition-colors">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2 hover:bg-orange-100 transition-colors">
                <span className="text-2xl">{category.icon}</span>
              </div>
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryNav