import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #7454f5;
    background: linear-gradient(100deg, #7454f5 0%, #6b3295 100%);
    color: #ffffff;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
