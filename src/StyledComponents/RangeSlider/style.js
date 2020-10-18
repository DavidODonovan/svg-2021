import styled from 'styled-components';

const THUMBStyles=(props)=>(`
  width: 14px;
  height: 14px;
  background: white;
  cursor: pointer;

  border: 1px solid hsla(0, 0%, 0%, 0.6);
  border-radius: 5px;

  // goes OUTSIDE the slider! cool
  // outline: 1px solid red
`);

const TRACKStyles=()=>(`
  width: 100%;
  height: 10px;
  cursor: pointer;
  box-shadow: inset 0 4px 10px hsla(0, 0%, 40%, 1);
  border-radius: 1.3px;
`);

export const Slider=styled.input.attrs({type:'range'})`
  // hides the slider so that custom slider can be made.
  appearance: none;

  // specific width is required for Firefox.
  width: 100%;

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
