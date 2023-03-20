import styled from 'styled-components'

export const HeaderMain = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  background-color: var(--gray);

  @media (max-width: 1320px) {
    padding-left: 24px;
  }

  @media (max-width: 750px) {
    display: none;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 22px;
  width: 100%;
  max-width: 1280px;
`
