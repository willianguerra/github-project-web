import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

type TextType = {
  size: number
  weight: number
  color?: string
}
type FilterButtonType = {
  width: string
}

type IconType = {
  width: number
}

export const GlobalStyle = createGlobalStyle`

:root{
  --white: #FFFFFF;
  --blue: #0056A6;
  --green: #33cc95;
  --gray: #24292E;
  --black: #000000;
  --orange: #FD8C73;
    

  --text-lite: #989898;
  --text-blue: #0587FF;
  --text-body: #262626;
  
  --background: #FFFFFF;

  --blue-gradient: linear-gradient(89.89deg, #0056A6 -30.01%, #0587FF 125.65%);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  
  button {
    cursor: pointer;
  }

  .PopoverTrigger {
    border: none!important;
    background: transparent!important;
  }

  .PopoverTrigger:hover {
    background-color: var(--mauve3);
  }
  .PopoverTrigger:focus {
    box-shadow: 0 0 0 2px black;
  }

  .PopoverContent {
    width: 256px;
    height: 100%;
    min-height: 228px;
    padding: 16px;
    background: linear-gradient(89.89deg, rgba(0, 86, 166, 0.05) -30.01%, rgba(5, 135, 255, 0.05) 125.65%), #FFFFFF;
    z-index: 99;
    border-radius: 8px;
    box-shadow: 0px 0px 16px rgba(79, 79, 80, 0.15);
  }

  .PopoverContent:focus {
    outline: none;
  }

  .PopoverArrow {
    fill: transparent;
  }
`

export const Text = styled.p<TextType>`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size + 'px'};
  color: ${(props) => (props.color ? props.color : 'var(--black)')};
`

export const Icon = styled.img<IconType>`
  width: ${(props) => props.width + 'px'};
`

export const FilterButton = styled.button<FilterButtonType>`
  background: var(--blue-gradient);
  display: flex;
  align-items: center;
  padding: 8px 24px 8px 8px;
  width: ${(props) => props.width};
  height: 40px;
  gap: 4px;
  font-weight: 400;
  font-size: 18px;
  border: none;
  border-radius: 42px;
  color: var(--white);

  @media (max-width: 750px) {
    max-width: 120px;
    max-height: 32px;
    font-weight: 400;
    font-size: 14px;
  }
`
