import api from './axiosConfig'

export const orderAPI = {
  // Place order from cart
  placeOrder: async () => {
    try {
      const response = await api.post('/order/placeorder')
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // Get user orders
  getUserOrders: async () => {
    try {
      const response = await api.get('/order/get')
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  }
}