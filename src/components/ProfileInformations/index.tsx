import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Text } from '../../styles/globalStyles'
import { ItemInformation } from '../ItemInformation'
import { PictureProfile } from '../PictureProfile'
import useWindowSize from 'react-use/lib/useWindowSize'
import {
  ContainerProfileInformations,
  PessoalInformation,
  LinkInformationGroup,
  LinkInformation,
  ButtonOpenInformationGroupType,
} from './styled'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

export function ProfileInformations() {
  const [
    additionalInformationIsOpen,
    setAdditionalInformationIsOpen,
  ] = useState(false)
  const { user } = useContext(AuthContext)
  const { width } = useWindowSize()
  return (
    <ContainerProfileInformations>
      <PessoalInformation>
        <PictureProfile image={user.avatar_url} />
        <Text
          size={width <= 750 ? 20 : 24}
          weight={700}
          color={'var(--text-body)'}
        >
          {user.name}
        </Text>
        <Text
          size={width <= 750 ? 14 : 16}
          weight={400}
          color={'var(--text-lite)'}
        >
          {user.bio}
        </Text>
      </PessoalInformation>

      {width <= 750 && (
        <ButtonOpenInformationGroupType
          onClick={() =>
            setAdditionalInformationIsOpen(!additionalInformationIsOpen)
          }
        >
          Informações Adicionais
          {additionalInformationIsOpen ? (
            <MdKeyboardArrowUp size={28} />
          ) : (
            <MdKeyboardArrowDown size={28} />
          )}
        </ButtonOpenInformationGroupType>
      )}

      <LinkInformationGroup open={additionalInformationIsOpen}>
        {user.company && (
          <ItemInformation
            icon="./icons/carbon_enterprise.svg"
            text={user.company}
          />
        )}

        {user.location && (
          <ItemInformation
            icon="./icons/cil_location-pin.svg"
            text={user.location}
          />
        )}

        {user.blog && (
          <ItemInformation
            icon="./icons/system-uicons_chain.svg"
            text={user.blog}
          />
        )}

        {user.social_accounts &&
          // eslint-disable-next-line array-callback-return
          user.social_accounts.map((social, id) => {
            if (social.provider === 'instagram') {
              return (
                <LinkInformation key={id} href={social.url} target="_blank">
                  <ItemInformation
                    icon="./icons/akar-icons_instagram-fill.svg"
                    text={
                      social.url
                        .split('https://www.instagram.com/')[1]
                        .split('/')[0]
                    }
                  />
                </LinkInformation>
              )
            }
          })}
      </LinkInformationGroup>
    </ContainerProfileInformations>
  )
}
