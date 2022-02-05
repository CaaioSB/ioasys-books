import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

import { login } from '~/services/auth'

import { useUser } from '~/context/user-context'

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
  const [authorization, setAuthorization] = useState(null)
  const [refreshToken, setRefreshToken] = useState(null)

  const authenticate = async data => {
    try {
      const {
        data: userData,
        headers: { authorization, 'refresh-token': refreshToken }
      } = await login(data)

      setUser(userData)
      setAuthorization(authorization)
      setRefreshToken(refreshToken)
    } catch (ex) {
      toast.error('Ops... Ocorreu um erro ao realizar a autenticação. Tente novamente mais tarde.')
    }
  }

  return (
    <AuthContext.Provider value={{ authorization, refreshToken, authenticate }} {...props}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node
}

export { AuthProvider, useAuth }
