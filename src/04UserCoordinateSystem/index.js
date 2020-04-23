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
      <strong>04 USER coordinate system</strong>
      <hr/>
        <p>The initial user coordinate system is the coordinate system established on the SVG canvas. This coordinate system is initially identical to the viewport coordinate system—it has its origin at the top left corner of the viewport with the positive x-axis pointing towards the right, the positive y-axis pointing down.
        </p>
        <br/>

        <p>
          Using the viewBox attribute, the initial user coordinate system—(also known as the current coordinate system, or user space in use)—can be modified so that it is not identical to the viewport coordinate system anymore. The viewBox attribute will be covered in future sections.
        </p>
        <br/>

      <img src={sketch1} width="90%"/>
      <br/>
    </div>
  );
};

export default BasicStyling;
