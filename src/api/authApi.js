import api from './axiosConfig'

export const authAPI = {
  // User signup
  signup: async (userData) => {
    try {
      const response = await api.post('/user/signup', userData)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // User login
  login: async (credentials) => {
    try {
      const response = await api.post('/user/login', credentials)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // Logout (client-side)
  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  },

  // Get current user from token
  getCurrentUser: () => {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const token = localStorage.getItem('token')
    return !!token
  }
}