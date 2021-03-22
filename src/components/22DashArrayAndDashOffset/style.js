import styled, { keyframes } from 'styled-components';
import { ReactComponent as MyLine } from './happySquiggle.svg';

export const HappySquiggle = styled(MyLine)`

`;

const THUMBStyles=(props)=>(`
  width: 25px;
  height: 25px;
  background: white;
  cursor: pointer;

  border: 1px solid hsla(0, 0%, 40%, 0.2);
  border-radius: 5px;

  // goes OUTSIDE the slider! cool
  // outline: 5px solid red
`);

const TRACKStyles=()=>(`
  width: 100%;
  height: 24px;
  cursor: pointer;
  box-shadow: inset 0 4px 10px hsla(0, 0%, 40%, 1);
  border-radius: 1.3px;
`);

export const RangeSlider=styled.input.attrs({type:'range'})`
  // hides the slider so that custom slider can be made.
  appearance: none;

  // specific width is required for Firefox.
  width: 200px;

  // otherwise white in Chrome.
  background: transparent;

  // style the 'thumb' handle
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    ${(props)=> THUMBStyles(props)}
  }
  &::-moz-range-thumb {
    ${(props) => THUMBStyles(props)}
  }
  &::-ms-thumb {
    ${(props) => THUMBStyles(props)}
  }

  &:focus {
    outline: none;
  }

  &:-ms-track {
    width: 100%;
    cursor: pointer;

    // hides the slider so custom styles can be added
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-webkit-slider-runnable-track {
    ${()=>TRACKStyles()}
  }
  &::-moz-range-track {
    ${()=>TRACKStyles()}
  }
  &::-ms-track {
    ${()=>TRACKStyles()}
  }

`;
