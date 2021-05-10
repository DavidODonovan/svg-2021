import styled, { keyframes } from 'styled-components';
import facePath from './face.js'

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

export default styled.path.attrs(()=>({
  d: facePath
}))`
  animation: ${props => pulseAnim("green", "purple")} infinite 4s linear;
`;
