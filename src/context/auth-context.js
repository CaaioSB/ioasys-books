import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

import { login, refresh } from '~/services/auth'

import { useUser } from '~/context/user-context'

import { setAuthorization, setRefreshToken, setUserData, getRefreshToken, getUserData } from '~/helpers/localStorage'

const AuthContext = createContext()

const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

const AuthProvider = ({ children, ...props }) => {
  const { setUser } = useUser()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    refreshToken()
  }, [])

  const refreshToken = async () => {
    setIsLoading(true)
    const currentRefreshToken = getRefreshToken()
    const currentUserData = getUserData()

    if (currentRefreshToken && currentUserData) {
      try {
        const {
          headers: { authorization, 'refresh-token': refreshToken }
        } = await refresh(currentRefreshToken)

        setAuthorization(authorization)
        setRefreshToken(refreshToken)
        setUser(currentUserData)
      } catch ({ response }) {
        toast.error(response.data.errors.message)
      }
    } else {
      logout()
    }

    setIsLoading(false)
  }

  const authenticate = async data => {
    try {
      const {
        data: userData,
        headers: { authorization, 'refresh-token': refreshToken }
      } = await login(data)

      setUser(userData)
      setUserData({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        gender: userData.gender,
        birthdata: userData.birthdata
      })
      setAuthorization(authorization)
      setRefreshToken(refreshToken)
    } catch (error) {
      if (error.status === 401) {
        return error
      }

      toast.error(error.data.errors.message)
    }
  }

  const logout = () => {
    setAuthorization(null)
    setRefreshToken(null)
    setUserData(null)
    setUser(null)
    setIsLoading(false)
  }

  return (
    <AuthContext.Provider value={{ authenticate, logout, isLoading }} {...props}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node
}

export { AuthProvider, useAuth }
