import styled, { keyframes } from "styled-components";

const pulseAnim = (colorOne, colorTwo) => keyframes`
  0% {
    fill:${colorOne};
    stroke-width:10px
  }
  50% {
    fill:${colorTwo};
    stroke-width:2px
  }
  100%{
    fill:${colorOne};
    stroke-width:10px
  }
`;

export const PulsingCircle = styled.circle`
  animation: ${props => pulseAnim("green", "purple")} infinite 4s linear;
  r: 100px;
  stroke: black;
  cursor: pointer;
`;

export const MyCircle=styled.circle.attrs((props)=>({

}))`
  r: 200px;
  fill: blue;
  cx: 200px;
  cy: 50px;
  stroke: black;
  stroke-width: 20px;
`;
