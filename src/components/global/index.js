import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, #root {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    background: #1f2e43;
    color: #fff;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
