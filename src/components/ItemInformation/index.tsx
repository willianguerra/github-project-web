import { Icon, Text } from '../../styles/globalStyles'
import { ContainerItemInformation } from './styled'

interface ItemInformationProps {
  icon: string
  text: string
}

export function ItemInformation({ icon, text }: ItemInformationProps) {
  return (
    <ContainerItemInformation>
      <Icon width={20} src={icon} />
      <Text size={14} weight={400} color="var(--text-blue)">
        {text}
      </Text>
    </ContainerItemInformation>
  )
}
