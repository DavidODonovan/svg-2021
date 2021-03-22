import styled, { keyframes } from 'styled-components';
import {ReactComponent as Circles } from './circles.svg';

export const CircularBells=styled(Circles).attrs((props)=>({

}))`
  & circle {
    cursor: pointer;
    fill: red;

    ${({$clicked})=>{
      console.log($clicked)
      if($clicked){
        return `fill: blue;`
      }
    }};
  }
`;
