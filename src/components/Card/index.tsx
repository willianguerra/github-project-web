import { Repositories } from '../../@types/User'
import { Icon, Text } from '../../styles/globalStyles'
import {
  CardContainer,
  FeedBackContent,
  FooterCard,
  NameProjectContent,
} from './styled'

interface CardProps {
  repos: Repositories
  type: 'repositories' | 'starred'
}

export function Card({ repos, type }: CardProps) {
  return (
    <CardContainer key={repos.id}>
      <NameProjectContent>
        <Text size={18} weight={300}>
          {repos.full_name.split('/')[0]}
        </Text>
        <Text size={18} weight={600}>
          /
        </Text>
        <Text size={18} weight={500} color={'var(--text-blue)'}>
          {repos.full_name.split('/')[1]}
        </Text>
      </NameProjectContent>
      <Text size={14} weight={400} color={'var(--text-lite)'}>
        {repos.description}
      </Text>
      <FooterCard>
        {type === 'repositories' && (
          <FeedBackContent>
            <Icon width={20} src="./icons/ant-design_star-filled.svg" />
            {repos.stargazers_count}
          </FeedBackContent>
        )}

        {type === 'starred' && (
          <FeedBackContent>
            {repos.language ? repos.language : 'No language'}
          </FeedBackContent>
        )}
        <FeedBackContent>
          <Icon width={20} src="./icons/fluent_branch-fork-24-regular.svg" />
          {repos.forks_count}
        </FeedBackContent>
      </FooterCard>
    </CardContainer>
  )
}
