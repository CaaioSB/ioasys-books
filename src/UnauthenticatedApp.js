import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Splash from '~/components/Splash'

import Signin from '~/routes/Signin/Signin'

import { useAuth } from '~/context/auth-context'

const UnauthenticatedApp = () => {
  const { isLoading } = useAuth()

  if (isLoading) {
    return <Splash />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='*' element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default UnauthenticatedApp
