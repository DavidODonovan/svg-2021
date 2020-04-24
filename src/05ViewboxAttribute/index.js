import React from 'react';
import { Grid, SVGWrapper } from './style';
import { Link } from 'react-router-dom';
import sketch1 from '../_images/sketch1.jpg';
import { ReactComponent as Smiley } from '../_images/smiley.svg';


const BasicStyling=()=>{
  return (
    <div>
      <Link to="/" style={{color: "blue"}}>back to index</Link>
      <hr/>
      <strong>05 viewBox attribute</strong>
      <hr/>

      Here's an svg element with a 100 x 100 <em>viewport</em>, and <strong>no viewBox settings</strong>;
      <br/>
      <br/>

      <SVGWrapper width={100} height={100}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"></path>
        </svg>
      </SVGWrapper>
      <br/>

      <p>
       Note how the user-coordinate-system and viewport coordinate system are identical.
       This is the default; we did not specify <strong>our own coordinate system </strong>by setting up a <strong>viewBox </strong>attribute.
       </p>
       <br/>

       <p>
         When we created a viewport coordinate system by setting the width and height to 100px, the browser created a default user coordinate system that matches it exactly.
         For this reason all the positioning and drawing seems to be done relative to the viewport-coord-system. However in actual fact the drawing is done by applying lines and planes to the svg landscape using the user-coord-system, and it has been set up by default to be a one-to-one mapping of the viewport-coord-system.
       </p>
       <br/>

       <p>
          This is where I begin to imagine the svg spec is like a camera; it has a viewfinder which we look through; the viewport. Using this 'window' onto the svg world we are initially using a 'lens' that doesn't magnify or contract the image, but instead gives us a view which is kind of like we have placed our large camera flat to the 'ground' of the svg-world, so the mapping is one-to-one. I imagine it as kind of like the camera is a large house-window that we have laid on the 'ground' of the svg-world.
       </p>

       <p>
         We can think of the user coordinate setting as kind of like changing lenses on a camera; we get a different field of view and a different magnification or 'zoom'. We can make 'features' on the svg landscape look closer or further away, larger or smaller, and located in different places in our 'photo' just by changing lenses and adjusting the direction our lens is pointing. With our special svg-camera we can also change the aspect ratio of the shot, so it's a pretty cool camera.
       </p>

      <hr/>
      When we use the viewBox attribute we can  <strong>customise our user coordinate system</strong>.
      <SVGWrapper width={100} height={100}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"></path>
        </svg>
      </SVGWrapper>
      <br/>


      <hr/>

      <img src={sketch1} width="90%"/>
      <br/>
    </div>
  );
};

export default BasicStyling;