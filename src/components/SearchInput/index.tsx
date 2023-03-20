import { Input, SearchInputContainer } from './styled'
import { FiSearch } from 'react-icons/fi'

interface SearchInputProps {
  setTextFilter: (searchValue: string) => void
  textFilter: string
  search: () => void
}

export function SearchInput({ setTextFilter, textFilter, search }: SearchInputProps) {
  function handleKeyPress(event: any) {
    if (event.key === 'Enter') {
      search()
    }
  }
  return (
    <SearchInputContainer>
      <FiSearch size={26} color={'var(--text-lite)'} />
      <Input
        value={textFilter}
        onChange={(event) => setTextFilter(event.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search Here"
      />
    </SearchInputContainer>
  )
}
