import { BrowserRouter, Routes, Route } from 'react-router-dom'

const UnauthenticatedApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<p>Login Page</p>} />
      <Route path='*' element={<p>404</p>} />
    </Routes>
  </BrowserRouter>
)

export default UnauthenticatedApp
