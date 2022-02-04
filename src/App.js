import { useState } from 'react'

import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

const App = () => {
  const [isLogged] = useState(false)

  return <div className='App'>{isLogged ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>
}

export default App
