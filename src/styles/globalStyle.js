import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: rgb(116,84,245);
    background: linear-gradient(100deg, rgba(116,84,245,1) 0%, rgba(197,129,217,1) 100%);
    color: #ffffff;
  }
`;

export default GlobalStyle;
