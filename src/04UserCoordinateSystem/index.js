import React from 'react';
import sketch1 from '../_images/sketch1.jpg';
import { Grid, SVGWrapper } from './style';
import { Link } from 'react-router-dom';


const BasicStyling=()=>{
  return (
    <div>
      <Link to="/" style={{color: "blue"}}>back to index</Link>
      <hr/>
      <strong>04 USER coordinate system</strong>
      <hr/>
        <p>The initial user coordinate system is the coordinate system established on the SVG <em>canvas</em>. This coordinate system is initially identical to the viewport coordinate system—it has its origin at the top left corner of the viewport with the positive x-axis pointing towards the right, the positive y-axis pointing down.
        </p>
        <br/>


      <img src={sketch1} width="500px"/>
      <br/>
    </div>
  );
};

export default BasicStyling;
