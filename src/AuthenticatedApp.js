import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '~/routes/Home'

const AuthenticatedApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<p>404</p>} />
    </Routes>
  </BrowserRouter>
)

export default AuthenticatedApp
