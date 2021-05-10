import styled, { keyframes } from 'styled-components';
import { ReactComponent as MyLine } from './happySquiggle.svg';

export const HappySquiggle = styled(MyLine)`

  & path {
    stroke: red;
    stroke-dasharray: 5 2 1 14 2 3 7 8;
    stroke-dashoffset: ${(props)=>props.dashoffset};
  }
`;
