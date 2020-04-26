import styled from 'styled-components';

export const GridItem=styled.div`
  border: 2px solid red;
  font-size: 0.7em;
  background-color: hsla(0, 0%, 90%, 1);
  margin: 5px;
  border-radius: 5px;
  padding: 0.5em;

  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(100px, 1fr) minmax(100px, 1fr) 1fr;
  grid-template-areas: "controls controls"
                       "controls controls"
                       "display-svg display-svg";
`;


export const ControlPanel=styled.div`
  background-color: hsla(0, 0%, 0%, 0.2);

  grid-area: controls;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 0.5em;
  padding: 0.5em;
  grid-template-areas: "viewport viewBox"
                       "par par"
`;

export const ControlPanelSection=styled.div`
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: hsla(0, 0%, 0%, 0.2);
`;

export const ControlPanelPAR=styled(ControlPanelSection)`
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas: "title title"
                       "par par"
                       "x     y"
                       "meetOrSlice meetOrSlice";
`;

export const DisplaySVG=styled.div`
  grid-area: display-svg;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(0, 0%, 0%, 0.2);
  & svg {
    fill: hsla(200, 100%, 90%, 0.5);
    background: hsla(240, 100%, 50%, 0.5);
    stroke: hsla(240, 100%, 10%, 0.8);
    stroke-width: 8px;
    stroke-linecap: round;
    stroke-linejoin: round;
    pointer-events: none;

    width: ${({width})=>width ? `${width}px`: null};
    height: ${({height})=>height ? `${height}px`: null};
  }
`;
