import styled from 'styled-components';


export const GridWrapper=styled.div`
  position: fixed;
  top: 2em;
  right: 0;
  bottom: 0;
  left: 0;

  display: grid;

  overflow-x: scroll;
`;


export const BackLink=styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left:0;
  background: #fff;
  border-bottom: 2px solid hsla(0, 0%, 40%, 0.8);
`;
