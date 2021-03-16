import styled from 'styled-components';

export const PlayDiv=styled.div`
  border: 10px solid purple;

`;

export const TableGrid=styled.div`
  display: grid;
  grid-gap: 1px;
  border: 1px solid gray;

  > :nth-child(2n+1) {
    background-color: hsla(20, 70%, 90%, 1);
  }
`;

export const GridRow=styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row dense;
  grid-gap: 1px;

  :hover {
    box-shadow: inset 0 0 10px #222222;
  }

  .title {
    font-weight: 600;
    background-color: hsla(20, 100%, 75%, 1);
    padding: 0.2em;
  }

  .continent {
    grid-column: 1;
  }

  .count {
    grid-column: 2;
  }
`;
