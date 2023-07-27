import axios from 'axios'
import store from '../stores/store'
import { setLoading } from '../stores/app.slice'

const BASE_URL = 'http://json.ffwagency.md/'

const apiService = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
})

apiService.interceptors.request.use(
  async (config) => {
    store.dispatch(setLoading(true))
    return config
  },
  (axiosError) => {
    return Promise.reject(axiosError)
  }
)

apiService.interceptors.response.use(
  async (response) => {
    store.dispatch(setLoading(false))
    return response
  },
  async (error) => {
    return Promise.reject(error)
  }
)

export default apiService
