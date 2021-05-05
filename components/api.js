import axios from 'axios'
import { AsyncStorage } from 'react-native'

const api = axios.create({
  baseURL: 'http://localhost:3000',
})

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@CodeApi:token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use((response) => {
  if (response.data.message) {
    throw response
  } else {
    return response
  }
})

export default api;