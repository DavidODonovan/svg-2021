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
      <br/>
      <p>
        The initial viewport coordinate system is a coordinate system established on the viewport.
        I think of it as sort of drawing a grid on a window, or the lines inside the viewfinder of a camera. If you take out a chinagraph pencil and draw a grid on your window then that is your viewport coordinate system, and it is 'drawn' on this 'glass' pane. You look out onto the 'world' through this glass pane. And remember you can sort of stretch and pull the size of your window to any size, just by using the width and height attributes of the svg element.
      </p>
      <br/>

      <p> This coordinate system conforms to the same norms as other web tech coord systems like html/css coordinates; origin is at top left, x-axis extends to the right, and y-axis extends downward. Simple enough.</p>

      <br/>
      <img src={sketch1} width="500px"/>
      <br/>

    </div>
  );
};

export default BasicStyling;
