import React from 'react';
import { Grid, SVGWrapper, ImageFilter } from './style';
import { Link } from 'react-router-dom';
import sketch1 from '../_images/sketch1.jpg';
import { ReactComponent as Smiley } from '../_images/smiley.svg';


const BasicStyling=()=>{
  return (
    <div>
      <Link to="/" style={{color: "blue"}}>back to index</Link>
      <hr/>
      <strong>06 preserveAspectRatio attribute</strong>
      <hr/>

      <br/>
      <SVGWrapper >
        <svg
          width="100"
          height="100"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"></path>
        </svg>
      </SVGWrapper>
      <br/>

      <hr/>

      <ImageFilter>
        <img src={sketch1} width="90%"/>
      </ImageFilter>
      <br/>
    </div>
  );
};

export default BasicStyling;
