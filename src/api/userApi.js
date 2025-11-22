import api from './axiosConfig'

export const userAPI = {
    // Update user profile (name, email)
    updateProfile: async (profileData) => {
        try {
            const response = await api.put('/user/profile', profileData)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    },

    // Update user password
    updatePassword: async (passwordData) => {
        try {
            const response = await api.put('/user/password', passwordData)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    },

    // Get current user profile
    getProfile: async () => {
        try {
            const response = await api.get('/user/profile')
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }
}
