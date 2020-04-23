import React from 'react';
import sketch1 from '../_images/sketch1.jpg';
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
      <br/>
      <img src={sketch1} width="500px"/>
      <br/>
      <p>
        The initial viewport coordinate system is a coordinate system established on the viewport.
        I think of it as sort of drawing a grid on a window, or the lines inside the viewfinder of a camera: your coordinate system is on this 'glass' pane, and you look out onto the 'world' through this glass pane.
      </p>
      <br/>

      <p> This coordinate system is just like normal html/css coordinates with origin at top left, the x-axis extending to the right, and y-axis extending downward. Simple enough.</p>


    </div>
  );
};

export default BasicStyling;
