import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu'
import { ProfileInformations } from '../../components/ProfileInformations'
import { SearchInput } from '../../components/SearchInput'
import { Key, useContext, useEffect, useState } from 'react'
import {
  Container,
  ContainerSearch,
  Content,
  Main,
  MainLoading,
} from './styled'
import { Card } from '../../components/Card'
import { AuthContext } from '../../contexts/AuthContext'
import useWindowSize from 'react-use/lib/useWindowSize'
import LoadingOverlayWrapper from 'react-loading-overlay-ts'
import { ClipLoader } from 'react-spinners'
import { Filters } from '../../components/Filters'
import { api } from '../../services/api'
import qs from 'query-string'
import { Repositories } from '../../@types/User'

export function Profile() {
  const { width } = useWindowSize()
  const { user } = useContext(AuthContext)
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>('')
  const [textFilter, setTextFilter] = useState<string>('')
  const [selectedLanguageFilter, setSelectedLanguageFilter] = useState<string>(
    '',
  )
  const [searchResult, setSearchResult] = useState<any>()
  const [itemActive, setItemActive] = useState<'repositories' | 'starred'>(
    'repositories',
  )

  function handleClickItemMenu(item: 'repositories' | 'starred') {
    setItemActive(item)
  }

  async function handleSearch() {
    const params = qs.stringify({
      q: textFilter,
      user: user.login,
      type: selectedTypeFilter,
      language: selectedLanguageFilter,
      tab: itemActive,
    })

    const response = await api.get(`/search?${params}`)
    setSearchResult(response.data.items)
  }

  useEffect(() => {
    if (user.token !== '') {
      handleSearch()
    }
  }, [])

  if (user.token === '') {
    return (
      <MainLoading>
        <LoadingOverlayWrapper
          active={true}
          spinner={<ClipLoader color="var(--text-blue)" size={50} />}
        />
      </MainLoading>
    )
  }
  return (
    <Main>
      <Header />
      <Container>
        <ProfileInformations />
        <Content>
          <Menu
            starred_count={user.starred ? user.starred.length : 0}
            repos_count={user.repos ? user.repos.length : 0}
            itemActive={itemActive}
            handleClickItemMenu={handleClickItemMenu}
          />
          <ContainerSearch>
            {width > 768 && (
              <SearchInput
                textFilter={textFilter}
                setTextFilter={setTextFilter}
                search={handleSearch}
              />
            )}
            <Filters
              search={handleSearch}
              selectedTypeFilter={selectedTypeFilter}
              setSelectedTypeFilter={setSelectedTypeFilter}
              selectedLanguageFilter={selectedLanguageFilter}
              setSelectedLanguageFilter={setSelectedLanguageFilter}
            />
            {width < 750 && (
              <SearchInput
                textFilter={textFilter}
                setTextFilter={setTextFilter}
                search={handleSearch}
              />
            )}
          </ContainerSearch>

          {width > 750 && width <= 768 && (
            <SearchInput
              textFilter={textFilter}
              setTextFilter={setTextFilter}
              search={handleSearch}
            />
          )}

          {itemActive === 'repositories'
            ? searchResult
              ? searchResult.map(
                  (repo: Repositories, id: Key | null | undefined) => {
                    return <Card key={id} type="repositories" repos={repo} />
                  },
                )
              : user.repos &&
                user.repos.map(
                  (repo: Repositories, id: Key | null | undefined) => {
                    return <Card key={id} type="repositories" repos={repo} />
                  },
                )
            : user.starred &&
              // eslint-disable-next-line array-callback-return
              user.starred.map((starreds, id) => {
                if (starreds.name.includes(textFilter)) {
                  return <Card key={id} type="starred" repos={starreds} />
                }
              })}
        </Content>
      </Container>
    </Main>
  )
}
