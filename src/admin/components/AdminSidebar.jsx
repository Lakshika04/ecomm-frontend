import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Users, Package, ShoppingBag, BarChart3 } from 'lucide-react'

const AdminSidebar = () => {
  const location = useLocation()

  const menuItems = [
    { path: '/admin', icon: BarChart3, label: 'Dashboard' },
    { path: '/admin/users', icon: Users, label: 'Users' },
    { path: '/admin/products', icon: Package, label: 'Products' },
    { path: '/admin/orders', icon: ShoppingBag, label: 'Orders' }
  ]

  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 hover:bg-gray-700 ${
              location.pathname === item.path ? 'bg-gray-700 border-r-4 border-orange-500' : ''
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default AdminSidebar