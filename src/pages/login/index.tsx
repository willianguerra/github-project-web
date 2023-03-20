import {
  ButtonGithub,
  LoginButton,
  LoginContainer,
  LoginContent,
  LoginHeader,
  MainLogin,
} from './styled'
import qs from 'query-string'
import Cookies from 'universal-cookie'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Text } from '../../styles/globalStyles'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useWindowSize } from 'react-use'

export function Login() {
  const cookies = new Cookies()
  const { code } = qs.parseUrl(window.location.href).query
  const { signIn, user } = useContext(AuthContext)
  const navigate = useNavigate()
  const { width } = useWindowSize()

  useEffect(() => {
    if (user.token !== '') {
      navigate('/profile')
    }
    async function login() {
      if (code) {
        cookies.set('code', code)
        if (await signIn()) {
          navigate('/profile')
        }
      }
    }

    login()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function redirectToGithub(): void {
    const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize'
    const params = qs.stringify({
      response_type: 'code',
      scope: 'user public_repo',
      client_id: process.env.REACT_APP_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_REDIRECT_URL,
      state: 'test-t5',
    })
    const authorizationUrl = `${GITHUB_AUTH_URL}?${params}`
    window.location.href = authorizationUrl
  }

  return (
    <LoginContainer>
      <LoginHeader>
        <img src="./image/logo-github.svg" alt="" />
        <LoginContent>
          <LoginButton onClick={redirectToGithub}>Sign in</LoginButton>
        </LoginContent>
      </LoginHeader>

      <MainLogin>
        <Text size={width <= 750 ? 50 : 80} weight={500} color={'var(--white)'}>
          Teste para vaga de front-end
        </Text>
        <Text size={width <= 750 ? 28 : 32} weight={400} color={'#c0c0c0'}>
          Faça login para acessar o teste para vaga <br />
          de front-end no Magazord.com.br
        </Text>
        <ButtonGithub onClick={redirectToGithub}>Sign in Github</ButtonGithub>
      </MainLogin>
    </LoginContainer>
  )
}
