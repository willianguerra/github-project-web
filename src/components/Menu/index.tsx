import { ContainerMenu, Counter, ItemMenu } from './styled'
import { BiBookBookmark } from 'react-icons/bi'
import { TiStarOutline } from 'react-icons/ti'
import { Text } from '../../styles/globalStyles'
import { useWindowSize } from 'react-use'

interface MenuProps {
  handleClickItemMenu: (item: 'repositories' | 'starred') => void
  itemActive: 'repositories' | 'starred'
  repos_count: number
  starred_count: number
}

export function Menu({
  handleClickItemMenu,
  itemActive,
  repos_count,
  starred_count,
}: MenuProps) {
  
  const { width } = useWindowSize()
  return (
    <ContainerMenu>
      <ItemMenu
        active={itemActive === 'repositories'}
        onClick={() => handleClickItemMenu('repositories')}
      >
        <BiBookBookmark size={24} />
        <Text size={width <= 750 ? 16 : 18} weight={400}>
          Repositories
        </Text>
        <Counter>{repos_count}</Counter>
      </ItemMenu>
      <ItemMenu
        active={itemActive === 'starred'}
        onClick={() => handleClickItemMenu('starred')}
      >
        <TiStarOutline size={24} />
        <Text size={width <= 750 ? 16 : 18} weight={400}>
          Starred
        </Text> 
        <Counter>{starred_count}</Counter>
      </ItemMenu>
    </ContainerMenu>
  )
}
