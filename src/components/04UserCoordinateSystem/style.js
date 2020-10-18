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


export const BackLink=styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left:0;
  background: #fff;
  border-bottom: 2px solid hsla(0, 0%, 40%, 0.8);
`;
