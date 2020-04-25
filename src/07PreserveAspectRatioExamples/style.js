import styled from 'styled-components';


export const GridWrapper=styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  x-overflow: scroll;
  & div {
    border: 1px solid red;
  }
`;


export const SVGWrapper=styled.div`
  grid-area: 2/2;
  position: relative;
  & svg {
    position: absolute;
    right: 0;
    left: 0;
    stroke: black;
    stroke-width: 6px;
    fill: yellow;
    background: red;
  }
`;
