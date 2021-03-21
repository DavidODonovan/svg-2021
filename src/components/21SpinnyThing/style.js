import styled from 'styled-components';
import { ReactComponent as NewLogo } from './newLogo.svg';

export const MyLogo=styled(NewLogo).attrs(()=>({

}))`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;

  & #hexagon path {
    stroke-dasharray: 4;
    stroke-dashoffset: -4;
    stroke: orange;
  }
`;
