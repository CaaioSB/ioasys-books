import axios from 'axios'

const defaultOptions = {
  baseURL: 'https://books.ioasys.com.br/api'
}

const instance = axios.create(defaultOptions)

instance.interceptors.request.use(config => {
  return {
    ...config,
    data: {
      ...config.data
    },
    headers: {
      ...config.headers
    }
  }
})

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response)
)

export default instance
