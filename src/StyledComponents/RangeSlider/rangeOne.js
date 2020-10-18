import styled from 'styled-components';

// Webkit cannot style progress so we fake it with a long shadow on the thumb element

const makeLongShadow = (color, size) => {
 let i = 18;
 let shadow = `${i}px 0 0 ${size} ${color}`;

 for (; i < 706; i++) {
   shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
 }

 return shadow;
};

const height=100;
const thumbHeight=50;
const upperBackground='hsla(240, 100%, 50%, 0.2)';
const lowerBackground='hsla(240, 100%, 50%, 0.5)';
const thumbColor='blue';
const upperColor="red";
const thumbHoverColor="purple";

export const RangeSlider = styled.input`
 overflow: hidden;
 display: block;
 appearance: none;
 max-width: 700px;
 width: 100%;
 margin: 0;
 height: ${height};
 cursor: pointer;

 &:focus {
   outline: none;
 }

 &::-webkit-slider-runnable-track {
   width: 100%;
   height: ${height};
   background: ${lowerBackground};
 }

 &::-webkit-slider-thumb {
   position: relative;
   appearance: none;
   height: ${thumbHeight}px;
   width: ${thumbHeight}px;
   background: ${thumbColor};
   border-radius: 100%;
   border: 0;
   top: 50%;
   transform: translateY(-50%);
   box-shadow: ${makeLongShadow(upperColor, "-10px")};
   transition: background-color 150ms;
 }

 &::-moz-range-track,
 &::-moz-range-progress {
   width: 100%;
   height: ${height};
   background: ${upperBackground};
 }

 &::-moz-range-progress {
   background: ${lowerBackground};
 }

 &::-moz-range-thumb {
   appearance: none;
   margin: 0;
   height: ${thumbHeight};
   width: ${thumbHeight};
   background: ${thumbColor};
   border-radius: 100%;
   border: 0;
   transition: background-color 150ms;
 }

 &::-ms-track {
   width: 100%;
   height: ${height};
   border: 0;
   /* color needed to hide track marks */
   color: transparent;
   background: transparent;
 }

 &::-ms-fill-lower {
   background: ${lowerBackground};
 }

 &::-ms-fill-upper {
   background: ${upperBackground};
 }

 &::-ms-thumb {
   appearance: none;
   height: ${thumbHeight};
   width: ${thumbHeight};
   background: ${thumbColor};
   border-radius: 100%;
   border: 0;
   transition: background-color 150ms;
   /* IE Edge thinks it can support -webkit prefixes */
   top: 0;
   margin: 0;
   box-shadow: none;
 }

 &:hover,
 &:focus {
   &::-webkit-slider-thumb {
     background-color: ${thumbHoverColor};
   }
   &::-moz-range-thumb {
     background-color: ${thumbHoverColor};
   }
   &::-ms-thumb {
     background-color: ${thumbHoverColor};
   }
 }
`;
