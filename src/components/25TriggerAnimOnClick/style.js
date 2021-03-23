import styled, { keyframes, css } from 'styled-components';
import {ReactComponent as Circles } from './circles.svg';

const buttonAnim = keyframes`
	0% {
		r: 45;
	}
	50% {
    r: 35;
	}
	100% {
		r:45;
	}
`;

export const CircularBells=styled(Circles).attrs((props)=>({
}))`
  & circle {
    cursor: pointer;
    fill: red;
		/* discovered a new filter!*/
		filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 1));

    /* use weird $ syntax on props */
    /* also wrap return value in css helper */
    ${({$clicked})=>{
      if($clicked){
        return css`
					animation: ${buttonAnim} .4s linear;

					`;
      }
    }};
  }
`;
