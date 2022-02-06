import axios from 'axios'

import { getAuthorization } from '~/helpers'

const defaultOptions = {
  baseURL: 'https://books.ioasys.com.br/api'
}

const instance = axios.create(defaultOptions)

instance.interceptors.request.use(config => {
  const authorizationToken = getAuthorization()

  return {
    ...config,
    data: {
      ...config.data
    },
    headers: {
      authorization: `Bearer ${authorizationToken}` || '',
      ...config.headers
    }
  }
})

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response)
)

export default instance
