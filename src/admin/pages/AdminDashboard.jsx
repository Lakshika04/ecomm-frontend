import React, { useState, useEffect } from 'react'
import { Users, Package, ShoppingBag, DollarSign } from 'lucide-react'
import AdminSidebar from '../components/AdminSidebar'
import { adminAPI, productAPI } from '../../api'

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    products: 0,
    orders: 0,
    revenue: 0
  })

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const [usersRes, productsRes, ordersRes] = await Promise.all([
        adminAPI.getAllUsers(),
        productAPI.getAllProducts(),
        adminAPI.getAllOrders()
      ])
      
      const revenue = ordersRes.orders?.reduce((sum, order) => sum + order.totalAmount, 0) || 0
      
      setStats({
        users: usersRes.users?.length || 0,
        products: productsRes.productss?.length || 0,
        orders: ordersRes.orders?.length || 0,
        revenue
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  const statCards = [
    { title: 'Total Users', value: stats.users, icon: Users, color: 'bg-blue-500' },
    { title: 'Total Products', value: stats.products, icon: Package, color: 'bg-green-500' },
    { title: 'Total Orders', value: stats.orders, icon: ShoppingBag, color: 'bg-purple-500' },
    { title: 'Revenue', value: `Rp${stats.revenue.toLocaleString()}`, icon: DollarSign, color: 'bg-orange-500' }
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-800">{card.value}</p>
                </div>
                <div className={`p-3 rounded-full ${card.color}`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard