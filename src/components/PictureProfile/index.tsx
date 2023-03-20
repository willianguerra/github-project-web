import { EmojiPicture } from '../EmojiPicture'
import { PictureContainer, ProfilePicture } from './styled'

interface PictureProfileProps {
  image: string
}

export function PictureProfile({image}: PictureProfileProps) {
  return (
    <PictureContainer>
      <ProfilePicture image={image} />
      <EmojiPicture />
    </PictureContainer>
  )
}
