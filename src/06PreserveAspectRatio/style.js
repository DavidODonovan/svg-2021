import styled from 'styled-components';

export const Grid=styled.div`
  border: 1px solid red;
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

export const ImageFilter=styled.div`
  filter: sepia(50%) brightness(120%);
`;
