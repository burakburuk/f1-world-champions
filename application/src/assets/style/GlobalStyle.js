import { createGlobalStyle } from 'styled-components'
import Roboto from '../font/Roboto-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5em;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${Roboto});
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: "Roboto", sans-serif;
  }
`;

export default GlobalStyle;