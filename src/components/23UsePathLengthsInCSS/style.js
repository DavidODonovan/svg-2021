import styled, { keyframes } from 'styled-components';
import { ReactComponent as NewLogo } from './newLogo.svg';

const hexagonKeyframes = keyframes`
  from {
    transform: rotateY(0deg)
  }
  to {
    transform: rotateY(360deg)
  }
`;

const squareKeyframes=keyframes`
  from {
    stroke-dashoffset: -350;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

export const MyLogo=styled(NewLogo).attrs(()=>({
}))`

  & #redCircle path {
  }
  & #blueSquare path {
  }

  & #hexagon path {

    stroke-dasharray: 4;
    stroke-dashoffset: -4;
    stroke: orange;
  }
`;
