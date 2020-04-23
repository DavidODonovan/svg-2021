import React from 'react';
import sketch1 from './sketch1.jpg';
import { ReactComponent as Smiley } from './smiley.svg';
import { Grid, SVGWrapper } from './style';
import { Link } from 'react-router-dom';


const BasicStyling=()=>{
  return (
    <div>
      <Link to="/" style={{color: "blue"}}>back to index</Link>
      <hr/>
      <strong>03 viewPORT coordinate system</strong>
      <hr/>
      <strong>viewport coordinate system</strong>
      <img src={sketch1} width="90%"/>
      <br/>
      <p>
        The initial viewport coordinate system is a coordinate system established on the viewport, with the origin at the top left corner of the viewport at point (0, 0), the positive x-axis pointing towards the right, the positive y-axis pointing down, and one unit in the initial coordinate system equals one “pixel” in the viewport. This coordinate system is similar to the coordinate system established on an HTML element with a CSS box model. Simple enough.

      </p>


    </div>
  );
};

export default BasicStyling;
