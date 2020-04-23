import styled from 'styled-components';

export const SVGWrapper=styled.div`
  & svg {
    fill: yellow;
    stroke: black;
    stroke-width: 8px;
    stroke-linecap: round;
    stroke-linejoin: round;
    pointer-events: none;
  }
`;
