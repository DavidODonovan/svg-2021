import { createGlobalStyle } from 'styled-components';

const GlobalColours = createGlobalStyle`
  :root {
    --red: #ff6f69;
    --mauve: hsla(269, 18%, 53%, 1);
    --lighter: hsla(303, 23%, 69%, 1);
    --peachy: hsla(358, 71%, 85%, 1);
    --italian: hsla(22, 100%, 95%, 1);
    --orange: 	hsla(21, 88%, 77%, 1);
    --pomegranate: hsla(357, 44%, 62%, 1);
    --purple: hsla(329, 20%, 41%, 1);
    --dark: hsla(296, 19%, 29%, 1);
    --text: hsla(33, 16%, 30%, 1);
    --listBorder: hsla(33, 16%, 50%, 0.3);
  }

`;

export default GlobalColours;
