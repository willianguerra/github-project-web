import styled, { css } from 'styled-components'

type ItemMenuType = {
  active: boolean
}

const activeItemMenu = css`
  p, svg, div {
    color: var(--black);
  }

  border-bottom: 2px solid var(--orange);
`

export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 50px;
  height: 40px;
  margin-bottom: 46px;

  
  @media (max-width: 750px) {
    grid-gap: 10px;
    justify-content: center;
  }
`

export const ItemMenu = styled.div<ItemMenuType>`
  display: flex;
  align-items: center;
  height: 40px;
  grid-gap: 19px;
  user-select: none;
  cursor: pointer;
  padding-left: 10px;

  p, svg, div {
    color: var(--text-lite)
  }

  ${(props) => props.active && activeItemMenu};
`
export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 24px;
  background: #f8f8f8;
  border: 1px solid #dbdbdb;
  border-radius: 59px;
  margin-left: -11px;
`
