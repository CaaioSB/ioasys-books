import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { createGlobalStyle } from 'styled-components'

import { useAuth } from '~/context/auth-context'
import { useUser } from '~/context/user-context'

import AuthenticatedApp from '~/AuthenticatedApp'
import UnauthenticatedApp from '~/UnauthenticatedApp'

import 'react-toastify/dist/ReactToastify.css'

const GlobalStyle = createGlobalStyle`
    body {
      background-color: #eee;
      font-family: 'Heebo', sans-serif !important;
    }
    * {
      margin: 0;
      padding: 0;
    }

    a, button {
      cursor: pointer;
      &:disabeld {
        cursor: not-allowed;
      }
    }
  `

const App = () => {
  const [isLogged] = useState(false)
  const { authenticate } = useAuth()
  const { user } = useUser()

  return (
    <div className='App'>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      <GlobalStyle />
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
