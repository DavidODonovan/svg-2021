import { createGlobalStyle } from 'styled-components';

const GlobalWebkitScrolling = createGlobalStyle`
  * {
    -webkit-overflow-scrolling: touch;
  }
`;

export default GlobalWebkitScrolling;
