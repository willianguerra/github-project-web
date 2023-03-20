import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh);
  background-image: url('https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp');
  background-size: cover;
`

export const LoginHeader = styled.div`
  width: 100%;
  height: 60px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 45px;
  padding: 12px;
  font-weight: 400;
  font-size: 16px;
  border: 1px solid var(--white);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
    transition: 0.4s;
  }
`

export const LoginContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 400px;
  grid-gap: 25px;
  border-radius: 8px;
  width: 350px;
`

export const MainLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 60vh;
  width: 60%;
  grid-gap: 16px;

  @media (max-width: 750px) {
  min-height: 80vh;
  }
`
export const ButtonGithub = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 60px;
  font-weight: 400;
  font-size: 24px;
  background: #633bbc;
  border-radius: 10px;
  padding: 34px;
  cursor: pointer;
  margin-top: 12px;

  &:hover {
    filter: brightness(0.8);
    transition: 0.4s;
  }
`
