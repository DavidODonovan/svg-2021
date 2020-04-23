import React from 'react';
import sketch1 from '../_images/sketch1.jpg';
import { ReactComponent as Smiley } from '../_images/smiley.svg';
import { Grid, SVGWrapper } from './style';
import { Link } from 'react-router-dom';


const BasicStyling=()=>{
  return (
    <div>
      <Link to="/" style={{color: "blue"}}>back to index</Link>
      <hr/>
      <strong>05 viewBox attribute</strong>
      <hr/>

      <SVGWrapper >

        <svg xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"></path>
        </svg>

      </SVGWrapper>
        <p>
          Using the viewBox attribute, the initial <strong>user coordinate system </strong>can be modified so that it is not identical to the <strong>viewport coordinate system </strong>anymore.
        </p>
        <br/>
        <hr/>

      <img src={sketch1} width="90%"/>
      <br/>
    </div>
  );
};

export default BasicStyling;
