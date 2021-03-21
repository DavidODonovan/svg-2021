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

  & .greySquare {
    stroke-dasharray: 170;
    stroke-dashoffset: -174;
  }
`;
