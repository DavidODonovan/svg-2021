import styled, { keyframes } from 'styled-components';
import {ReactComponent as Circles } from './circles.svg';

export const CircularBells=styled(Circles).attrs((props)=>({

}))`
  & circle {
    fill: red;
  }
`;

//
// ${({navOpen})=>{
//   if(navOpen)
//     return `
//       transform: translateX(0);
//       `;
// }};
