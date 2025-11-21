import api from './axiosConfig'

export const adminAPI = {
  // User Management
  getAllUsers: async () => {
    try {
      const response = await api.get('/user/all')
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  deleteUser: async (id) => {
    try {
      const response = await api.delete(`/user/${id}`)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // Order Management
  getAllOrders: async () => {
    try {
      const response = await api.get('/order/all')
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  updateOrderStatus: async (id, status) => {
    try {
      const response = await api.put(`/order/${id}/status`, { status })
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  }
}