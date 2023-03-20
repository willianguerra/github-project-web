import styled from 'styled-components'

type ProfilePictureType = {
  image: string
}

export const PictureContainer = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 18px;

  @media (max-width: 750px) {
    width: 104px;
    height: 104px;
  }
`

export const ProfilePicture = styled.div<ProfilePictureType>`
  background-image: ${(props) =>
    props.image !== ''
      ? `url('${props.image}')`
      : "url('image/no-picture.png')"};
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  border-radius: 100%;
`
