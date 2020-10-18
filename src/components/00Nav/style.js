import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBox=styled.ul`
  display: flex;
  flex-flow: column nowrap;
`;

export const MyLink=styled(Link)`
  // use display block to get ahref link to be full width & height.
  display: block;
  padding: 0.5em;
  margin: 2px;
  border-radius: 5px;
  background: hsla(0, 0%, 0%, 0.2);
  color: #fff;
  mix-blend-mode: luminosity;
  &:hover {
    background: hsla(0, 0%, 0%, 0.4);
  }
`;
  //
  // &.active {
  //   background: papayawhip;
  // }
  // &:hover {
  //   background: hsla(50, 20%, 90%,1);
  // }
  // &:visited {
  //   color: hsla(20, 50%, 30%, 1);
  // }
