import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const UserContext = createContext()

const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

const UserProvider = ({ children, ...props }) => {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }} {...props}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node
}

export { UserProvider, useUser }
