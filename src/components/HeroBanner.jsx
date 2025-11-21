import React from 'react'

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-8">
            <div className="flex-1">
              <div className="text-sm text-gray-600 mb-2">#Big Fashion Sale</div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Limited Time Offer!
              </h1>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Up to <span className="text-5xl">50%</span> OFF!
              </h2>
              <p className="text-gray-600 mb-6">Redefine Your Everyday Style</p>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="flex-1 flex justify-end">
              <div className="relative">
                <img 
                  src="/clothes.avif" 
                  alt="Fashion Items" 
                  className="w-96 h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner