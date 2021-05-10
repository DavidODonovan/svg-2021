import styled, { keyframes } from 'styled-components';
import { ReactComponent as CubeSVG } from './cube.svg';

const spin = keyframes`
	0% {
		stroke: #00aeef
	}
	37.5% {
		stroke: #ed1c24;
	}
	67.5% {
		stroke: #f69f37;
	}
	100% {
		stroke-dashoffset: -240;
		stroke: #00aeef;
	}
`

export const Cube = styled(CubeSVG).attrs((props)=>({
  width: 400,
	height: 400,
	viewBox: '0 0 60 60'
}))`
	${'' /* background: hsla(280, 100%, 10%, 1); */}


  & polygon {
      stroke: black;
      stroke-linecap: round;
      stroke-width: 4;
      stroke-dasharray: 0, 0, 50, 190;
      stroke-dashoffset: 0;
      stroke-linejoin: round;
      animation: ${spin} 3.5s infinite linear;
  }
`;
