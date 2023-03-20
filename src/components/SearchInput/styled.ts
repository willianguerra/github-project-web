import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  border-bottom: 1px solid #f4f4f4;
  width: 100%;
  height: 38px;
  max-width: 444px;
  display: flex;
  grid-gap: 18px;
  align-items: center;
  padding-left: 2px;

  @media (max-width: 750px) {
    flex-direction: row-reverse;
    padding: 0px 8px;
    svg {
      color: var(--text-blue) !important;
      width: 40px;
    }
  }
`

export const Input = styled.input`
  background-color: transparent;
  border: none;
  height: 100%;
  width: 100%;
  font-size: 18px;
  font-weight: 400;

  &::placeholder {
    color: var(--text-lite);

    @media (max-width: 750px) {
      color: transparent;
    }
  }

  &:focus {
    outline: 0;
  }
`
