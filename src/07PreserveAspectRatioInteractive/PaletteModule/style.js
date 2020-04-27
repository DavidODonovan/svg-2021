import styled from 'styled-components';

export const GridItem=styled.div`
  font-size: 0.7em;
  background-color: hsla(0, 0%, 0%, 0.4);
  color: #fff;
  margin: 5px;
  border-radius: 5px;
  padding: 0.5em;

  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto auto;
  grid-template-areas: "display-svg display-svg"
                       "controls controls"
                       "controls controls";

`;

export const Button=styled.button`
  background-color: hsla(0, 0%, 0%, 0.2);
  border: 1px solid hsla(0, 0%, 0%, 0.4);
  border-radius: 3px;
  padding: 0.2em;
  margin: 0.2em;
  &:hover {
    background-color: hsla(0, 0%, 0%, 0.4);
  }
`;

export const ControlPanel=styled.div`
  background-color: hsla(0, 0%, 0%, 0.2);
  transition: all .3s ease-in;

  grid-area: controls;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 0.5em;
  padding: 0.5em;
  grid-template-areas: "viewport viewBox"
                       "par par";
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
                       "xy    xy"
                       "meetOrSlice meetOrSlice";
`;

export const DisplaySVG=styled.div`
  grid-area: display-svg;
  display: flex;
  flex-direction: column;
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

    transition: all .3s ease-in;
    width: ${({width})=>width ? `${width}px`: null};
    height: ${({height})=>height ? `${height}px`: null};
  }
`;
