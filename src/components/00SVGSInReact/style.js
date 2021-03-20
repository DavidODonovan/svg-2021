import styled from 'styled-components';

import { ReactComponent as LogoReact } from './logo.svg';
import { ReactComponent as Long } from './long.svg';

export const StyledLogo=styled(LogoReact).attrs((props)=>({
  /* jsx svg element attrs go here */
  width: props.viewportwidth,
  height: props.viewportheight,
  viewBox: "170 180 500.9 200.3"
}))`
  /* css rules go here*/
  fill: green;
  border: 1px solid red;

  & circle {
    fill: ${(props)=>props.circlefill || "yellow"}
  }

  &:hover {
    cursor: pointer;
    fill: red;
  }
`;

export const LongStyled=styled(Long).attrs((props)=>({
  /* jsx svg element attrs go here */
}))`

  width: 100%;

  background: red;
  & path {
    fill: blue;
    stroke: yellow;
  }
  & g {
    fill: red;
  }
`;
