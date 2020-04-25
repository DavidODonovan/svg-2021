import styled from 'styled-components';

export const GridItem=styled.div`
  font-size: 0.7em;
  background-color: hsla(0, 0%, 90%, 1);
  margin: 5px;
  border-radius: 5px;
  padding: 0.5em;
`;

export const SVGWrapper=styled.div`
  & svg {
    fill: yellow;
    stroke: black;
    background: red;
    stroke-width: 8px;
    stroke-linecap: round;
    stroke-linejoin: round;
    pointer-events: none;

    width: ${({width})=>width ? `${width}px`: null};
    height: ${({height})=>height ? `${height}px`: null};
  }
`;
