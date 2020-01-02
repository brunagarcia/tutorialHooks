import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 13px;
    font-family: 'Hind', sans-serif;
  }
`;

export default GlobalStyle;
