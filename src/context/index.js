import PropTypes from 'prop-types'

import { UserProvider } from '~/context/user-context'
import { AuthProvider } from '~/context/auth-context'

const AppProviders = ({ children }) => (
  <UserProvider>
    <AuthProvider>{children}</AuthProvider>
  </UserProvider>
)

AppProviders.propTypes = {
  children: PropTypes.node
}

export default AppProviders
