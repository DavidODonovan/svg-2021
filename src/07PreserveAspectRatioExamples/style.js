import styled from 'styled-components';


export const GridWrapper=styled.div`
  max-width: 500px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 1em;
`;
