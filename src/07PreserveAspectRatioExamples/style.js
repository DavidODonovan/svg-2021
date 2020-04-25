import styled from 'styled-components';


export const GridWrapper=styled.div`
  position: fixed;
  top: 2em;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr 1em 1fr;
  grid-template-rows: 1fr 1em 1fr;
  x-overflow: scroll;
  & div {
    border: 1px solid red;
  }
`;


export const SVGWrapper=styled.div`

  grid-area: 2/2;
  & svg {
    height: 100%;
    width: 100%;
    stroke: black;
    stroke-width: 6px;
    fill: yellow;
    background: red;
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
