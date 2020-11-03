import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html { font-size: 62.5%; }
  body {
   font-family: 'Open Sans', sans-serif;
     margin: 0;
    padding: 0;
    line-height: 1.8em;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word
  }
`

export default GlobalStyle;
