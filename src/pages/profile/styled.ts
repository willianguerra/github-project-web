import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainLoading = styled.div`
  width: 100%;
  min-height: calc(100vh - 72px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -20px;
`

export const Container = styled.div`
  width: 100%;
  padding: 0px 16px;
  max-width: 1250px;
  margin-top: 40px;
  height: 100%;
  display: flex;
  grid-gap: 60px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 24px;

  @media (max-width: 750px) {
    height: 56px;
    background: #f8f8f8;
    border-radius: 8px;
    padding: 12px 8px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: -5px;
`
