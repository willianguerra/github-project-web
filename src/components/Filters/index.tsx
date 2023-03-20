import { FilterButton } from '../../styles/globalStyles'
import * as Popover from '@radix-ui/react-popover'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FiltersContainer, Label } from './styled'

interface FiltersProps {
  search: () => void
  selectedTypeFilter: string
  setSelectedTypeFilter: (type: string) => void
  selectedLanguageFilter: string
  setSelectedLanguageFilter: (language: string) => void
}

export function Filters({
  search,
  selectedTypeFilter,
  setSelectedTypeFilter,
  selectedLanguageFilter,
  setSelectedLanguageFilter,
}: FiltersProps) {


  function handleChangeTypeFilter(type: string) {
    setSelectedTypeFilter(type)
    search();
  }

  function handleChangeLanguageFilter(language: string) {
    setSelectedLanguageFilter(language)
    search();
  }

  return (
    <FiltersContainer>
      <Popover.Root>
        <Popover.Trigger className="PopoverTrigger">
          <FilterButton width="105px">
            <MdKeyboardArrowDown size={28} />
            Type
          </FilterButton>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="PopoverContent" sideOffset={5}>
            <Label>
              <input
                type="checkbox"
                name="all"
                checked={selectedTypeFilter === ''}
                onClick={() => handleChangeTypeFilter('')}
              />
              All
            </Label>
            <Label>
              <input
                type="checkbox"
                name="sources"
                checked={selectedTypeFilter === 'sources'}
                onClick={() => handleChangeTypeFilter('sources')}
              />
              Sources
            </Label>
            <Label>
              <input
                type="checkbox"
                name="forks"
                checked={selectedTypeFilter === 'forks'}
                onClick={() => handleChangeTypeFilter('forks')}
              />
              Forks
            </Label>
            <Label>
              <input
                type="checkbox"
                name="archived"
                checked={selectedTypeFilter === 'archived'}
                onClick={() => handleChangeTypeFilter('archived')}
              />
              Archived
            </Label>
            <Label>
              <input
                type="checkbox"
                name="mirrors"
                checked={selectedTypeFilter === 'mirrors'}
                onClick={() => handleChangeTypeFilter('mirrors')}
              />
              Mirrors
            </Label>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <Popover.Root>
        <Popover.Trigger className="PopoverTrigger">
          <FilterButton width="145px">
            <MdKeyboardArrowDown size={28} />
            Language
          </FilterButton>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="PopoverContent" sideOffset={5}>
            <Label>
              <input
                type="checkbox"
                name="all"
                checked={selectedLanguageFilter === ''}
                onClick={() => handleChangeLanguageFilter('')}
              />
              All
            </Label>
            <Label>
              <input
                type="checkbox"
                name="java"
                checked={selectedLanguageFilter === 'java'}
                onClick={() => handleChangeLanguageFilter('java')}
              />
              Java
            </Label>
            <Label>
              <input
                type="checkbox"
                name="typescript"
                checked={selectedLanguageFilter === 'typescript'}
                onClick={() => handleChangeLanguageFilter('typescript')}
              />
              TypeScript
            </Label>
            <Label>
              <input
                type="checkbox"
                name="html"
                checked={selectedLanguageFilter === 'html'}
                onClick={() => handleChangeLanguageFilter('html')}
              />
              HTML
            </Label>
            <Label>
              <input
                type="checkbox"
                name="css"
                checked={selectedLanguageFilter === 'css'}
                onClick={() => handleChangeLanguageFilter('css')}
              />
              CSS
            </Label>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </FiltersContainer>
  )
}
