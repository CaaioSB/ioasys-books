import { BrowserRouter, Routes, Route } from 'react-router-dom'

const AuthenticatedApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<p>Welcome to ioasys-books</p>} />
      <Route path='*' element={<p>404</p>} />
    </Routes>
  </BrowserRouter>
)

export default AuthenticatedApp
