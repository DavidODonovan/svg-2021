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


  & .select {
	display: block;
	font-size: 16px;
	font-family: sans-serif;
	font-weight: 700;
	color: #444;
	line-height: 1.3;
	padding: .6em 1.4em .5em .8em;
	width: 100%;
	max-width: 100%;
	box-sizing: border-box;
	margin: 0;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .5em;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
	  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
	background-size: .65em auto, 100%;
}
.select-css::-ms-expand {
	display: none;
}
.select-css:hover {
	border-color: #888;
}
.select-css:focus {
	border-color: #aaa;
	box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
	box-shadow: 0 0 0 3px -moz-mac-focusring;
	color: #222;
	outline: none;
}
.select-css option {
	font-weight:normal;
}
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
