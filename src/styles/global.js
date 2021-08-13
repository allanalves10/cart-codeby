import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
      --main: #008bea;
      --background: #d1d1d1;
      --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button, h1, h2, h3, h4, p {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
