import React from 'react'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Quote Section */}
      <div className="bg-gray-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">"Let's Shop Beyond Boundaries"</h2>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold">BeliBeli.com</span>
              </div>
              <p className="text-gray-300 mb-4">"Let's Shop Beyond Boundaries"</p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* BeliBeli */}
            <div>
              <h3 className="font-semibold mb-4">BeliBeli</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">About BeliBeli</a></li>
                <li><a href="#" className="hover:text-white">Career</a></li>
                <li><a href="#" className="hover:text-white">Mitra Blog</a></li>
                <li><a href="#" className="hover:text-white">BeliBeli Care</a></li>
                <li><a href="#" className="hover:text-white">B2B Digital</a></li>
              </ul>
            </div>

            {/* Buy */}
            <div>
              <h3 className="font-semibold mb-4">Buy</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Bill & Top Up</a></li>
                <li><a href="#" className="hover:text-white">BeliBeli COD</a></li>
                <li><a href="#" className="hover:text-white">Mitra Blog</a></li>
                <li><a href="#" className="hover:text-white">Promo</a></li>
              </ul>
            </div>

            {/* Sell & Guide and Help */}
            <div>
              <h3 className="font-semibold mb-4">Sell</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Seller Education Center</a></li>
                <li><a href="#" className="hover:text-white">Brand Index</a></li>
                <li><a href="#" className="hover:text-white">Register Official Store</a></li>
              </ul>
              
              <h3 className="font-semibold mb-4 mt-6">Guide and Help</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">BeliBeli Care</a></li>
                <li><a href="#" className="hover:text-white">Term and Condition</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Mitra</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">© 2001 - 2024 BeliBeli.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer