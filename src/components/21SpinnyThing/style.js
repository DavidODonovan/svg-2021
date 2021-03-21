import styled from 'styled-components';
import { ReactComponent as BoringLogo } from './newLogo.svg';

export const NewLogo=styled(BoringLogo).attrs(()=>({

}))`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;
