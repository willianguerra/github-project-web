import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 0px 0px 32px;
  gap: 10px;
  margin-left: -25px;
  cursor: pointer;

  position: relative;
  min-height: 123px;

  background: var(--white);
  &:hover {
    transition: 0.4s ease;
    box-shadow: 0px 0px 16px rgba(79, 79, 80, 0.15);
    z-index: 1;
  }

  @media (max-width: 768px) {
    margin-left: 0px;
    border-bottom: 2px solid #F4F4F4;
  }
`

export const NameProjectContent = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 6px;
`

export const FooterCard = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 34px;
`

export const FeedBackContent = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  font-size: 14px;
  font-weight: 400;
`
