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
        <p>The initial <strong>user</strong> coordinate system is the coordinate system established on the SVG <em>canvas</em>.
        </p>
        <br/>
        <p>
         <strong>This coordinate system is initially identical to the <em>viewport </em>coordinate system</strong> — the origin is at top left of the viewport with the positive x-axis extending to the right, the positive y-axis extending down.
        </p>
        <br/>


      <img src={sketch1} width="500px"/>
      <br/>
    </div>
  );
};

export default BasicStyling;
