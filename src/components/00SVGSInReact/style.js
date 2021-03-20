import styled from 'styled-components';

import { ReactComponent as LogoReact } from './logo.svg';

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
