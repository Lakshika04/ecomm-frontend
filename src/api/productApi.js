import api from './axiosConfig'

export const productAPI = {
  // Get all products
  getAllProducts: async () => {
    try {
      const response = await api.get('/product')
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // Get single product by ID
  getProductById: async (id) => {
    try {
      const response = await api.get(`/product/${id}`)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // Create new product (admin only)
  createProduct: async (productData) => {
    try {
      const response = await api.post('/product/add', productData)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // Create new product with images (admin only)
  createProductWithImages: async (formData) => {
    try {
      const response = await api.post('/product/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // Update product (admin only)
  updateProduct: async (id, productData) => {
    try {
      const response = await api.put(`/product/${id}`, productData)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // Delete product (admin only)
  deleteProduct: async (id) => {
    try {
      const response = await api.delete(`/product/${id}`)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  }
}