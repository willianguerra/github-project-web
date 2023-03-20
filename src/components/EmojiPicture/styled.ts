import styled from 'styled-components'

export const EmojiPictureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -25px;
  border-radius: 100%;
  position: absolute;
  width: 40px;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(79, 79, 80, 0.15);
  @media (max-width: 750px) {
    font-size: 14px;
    width: 35px;
    height: 35px;
  }
`
