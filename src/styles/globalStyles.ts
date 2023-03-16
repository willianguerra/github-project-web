import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

:root{
  --white: #FFFFFF;
  --blue: #0056A6;
  --green: #33cc95;
  --gray: #24292E;
  --black: #000000;
    

  --text-lite: #989898;
  --text-blue: #0587FF;
  --text-body: #262626;
  
  --background: #FFFFFF;
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
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`

export default GlobalStyle
