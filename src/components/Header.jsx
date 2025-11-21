import React from 'react'
import { Search, ShoppingCart, User, Bell, Menu, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-100 px-4 py-2 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>📱 Download BeliBeli App</span>
            <span>Mitra BeliBeli</span>
            <span>About BeliBeli</span>
            <span>BeliBeli Care</span>
            <span>Promo</span>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span>Welcome, {user?.name}</span>
                <button 
                  onClick={handleLogout}
                  className="hover:text-gray-800 flex items-center space-x-1"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/signup" className="hover:text-gray-800">Sign Up</Link>
                <Link to="/login" className="hover:text-gray-800">Login</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-gray-800">BeliBeli.com</span>
          </Link>

          {/* Categories Dropdown */}
          <div className="flex items-center space-x-2">
            <Menu className="w-5 h-5" />
            <span className="text-sm">All Category</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products or brand here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
            <Link to="/cart">
              <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer hover:text-orange-500" />
            </Link>
            {isAuthenticated ? (
              <Link to="/profile" className="flex items-center space-x-2 hover:text-orange-500">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium">{user?.name}</span>
              </Link>
            ) : (
              <Link to="/login">
                <User className="w-6 h-6 text-gray-600 cursor-pointer hover:text-orange-500" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header