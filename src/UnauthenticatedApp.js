import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Signin from '~/routes/Signin/Signin'

const UnauthenticatedApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='*' element={<p>404</p>} />
    </Routes>
  </BrowserRouter>
)

export default UnauthenticatedApp
