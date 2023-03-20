import { createContext, ReactNode, useState } from 'react'
import { api } from '../services/api'
import Cookies from 'universal-cookie'
import { User } from '../@types/User'

interface AuthContextType {
  isAuthenticated: boolean
  signIn: () => Promise<boolean>
  logOut: () => Promise<any>
  user: User
}

interface AuthProviderType {
  children: ReactNode
}

const USER_DEFAULT_VALUE = {
  login: '',
  id: 0,
  node_id: '',
  avatar_url: '',
  url: '',
  html_url: '',
  repos_url: '',
  type: '',
  site_admin: false,
  name: '',
  company: '',
  blog: '',
  location: '',
  email: '',
  hireable: null,
  bio: '',
  twitter_username: '',
  public_repos: 0,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: '',
  updated_at: '',
  token: '',
} as User

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderType) {
  const cookies = new Cookies()
  const localUserString = window.localStorage.getItem('user')
  const localUser = localUserString
    ? JSON.parse(localUserString)
    : USER_DEFAULT_VALUE
  const userCookie = localUser
  const [user, setUser] = useState<User>(userCookie)
  const isAuthenticated = !!user
  async function signIn() {
    try {
      const code = cookies.get('code')
      if (code && user.token === '') {
        api
          .post(`/login`, { code })
          .then((response) => {
            if (!response || response.status !== 200) {
              return false
            }
            window.localStorage.setItem('user', JSON.stringify(response.data))
            setUser(response.data)
            // window.location.href = '/profile'
            return true
          })
          
          .catch((error) => {
            return false
          })
          
          return true
      } else {
        return false
      }
    } catch (err) {
      console.error(err)
      return false
    }
  }

  async function logOut() {
    cookies.set('user', '')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}
