import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import { useAuth } from './context/auth-context'
import { useUser } from './context/user-context'

import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const [isLogged] = useState(false)
  const { authenticate } = useAuth()
  const { user } = useUser()

  return (
    <div className='App'>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
