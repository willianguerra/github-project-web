import { Text } from '../../styles/globalStyles'
import { HeaderContainer, HeaderMain } from './styled'

export function Header() {
  return (
    <HeaderMain>
      <HeaderContainer>
        <img src="/image/logo-github.svg" alt="" />
        <Text size={24} color={'var(--white)'} weight={400}>
          /
        </Text> 
        <Text size={16} color={'var(--white)'} weight={300}>
          Profile
        </Text>
      </HeaderContainer>
    </HeaderMain>
  )
}
