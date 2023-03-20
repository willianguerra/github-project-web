import styled from 'styled-components'

type LinkInformationGroupType = {
  open: boolean
}
export const ContainerProfileInformations = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 251px;
  align-items: flex-start;
  grid-gap: 24px;

  @media (max-width: 750px) {
    align-items: center;
  }
`

export const LinkInformationGroup = styled.div<LinkInformationGroupType>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 16px;
  margin-top: 7px;
  margin-left: -4px;

  @media (max-width: 750px) {
    width: 100%;
    width: 360px;
    height: 100%;
    background: #f8f8f8;
    border-radius: 8px;
    padding: 17px;
    display: ${(props) => (props.open ? 'flex' : 'none')};
    align-items: flex-start;
    justify-content: center;
  }
`

export const ButtonOpenInformationGroupType = styled.div`
  color: var(--text-blue);
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const LinkInformation = styled.a`
  display: flex;
  align-items: center;
  grid-gap: 11px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-color: var(--blue);
  }
`

export const PessoalInformation = styled.div`
  display: flex;
  grid-gap: 4px;
  flex-direction: column;
  text-align: center;
  align-items: center;
`
