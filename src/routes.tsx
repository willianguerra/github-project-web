import { useContext } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { AuthContext } from './contexts/AuthContext'
import { Login } from './pages/login'
import { Profile } from './pages/profile'

const Rotas = () => {
  const { user } = useContext(AuthContext)

  const isAuthFn = () => {
    if (user) {
      return user.token !== ''
    } else {
      return false
    }
  }

  function isAuthenticated() {
    if (window.location.pathname !== '/') {
      if (!isAuthFn()) {
        window.location.href = '/'
      }
    }
  }

  isAuthenticated()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
