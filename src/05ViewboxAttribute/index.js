import React from 'react';
import { Grid, SVGWrapper, BackLink, ImageFilter } from './style';
import { Link } from 'react-router-dom';
import sketch1 from '../_images/sketch1.jpg';
import { ReactComponent as Smiley } from '../_images/smiley.svg';


const BasicStyling=()=>{
  return (
    <div>
      <BackLink>
        <Link to="/" style={{color: "blue"}}>back to index</Link>
      </BackLink>
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
         When we created a viewport coordinate system by setting the width and height to 100px, the browser created a default user-coordinate-system that matches it exactly.
         For this reason all the positioning and drawing might appear to have been done relative to the viewport-coord-system. However in actual fact the drawing is done by applying lines and planes to the svg landscape using the user-coord-system, and it has been set up by default to be a one-to-one mapping of the viewport-coord-system.
         So right now the user-coordinate-system and viewport-coordinate-system are identical.
       </p>
       <br/>
       <p>If we want to <strong><em>scale</em></strong> our vector graphic, we are going to need to use the <strong>viewBox </strong> attribute.
       </p>
       <br/>

       <p>
          This is where you might begin to imagine the svg specification as being like a camera; it has a viewfinder which we look through; the viewport. Using this 'window' onto the svg-world we are initially using a 'lens' that doesn't magnify or contract the image, but instead gives us a view which is kind of like we have placed our large camera flat to the 'ground' of the svg-world, so the mapping is one-to-one. I imagine it as kind of like the camera is a large house-window that we have laid on the 'ground' of the svg-world.
       </p>
       <br/>

       <p>
         We can think of the user coordinate setting as kind of like changing lenses on a camera; we get a different field of view and a different magnification or 'zoom'. We can make 'features' on the svg landscape look closer or further away, larger or smaller, and located in different places in our 'photo' just by changing lenses and adjusting the direction our lens is pointing. With our special svg-camera we can also change the aspect ratio of the shot, so it's a pretty cool camera.
       </p>

      <hr/>
      So we use the <strong>viewBox </strong>attribute to <strong>customise our user-coordinate-system</strong>, which means essentially the viewBox attribute is how we <strong><em>scale</em></strong> our 'photo' of the svg-world. So the viewBox attribute is a <em>scaling mechanism.</em>
      <br/>
      <br/>

      Here is our smiley face with <strong>no viewBox</strong> setting;
      <br/>
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

      And here is our smiley face with viewBox set to "0 0 50 50";
      <br/>
      <br/>
      <SVGWrapper >
        <svg
          width="100"
          height="100"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"></path>
        </svg>
      </SVGWrapper>
      <hr/>
      <br/>

      Watch what happens when we change the x/y coords of the viewBox like so: "10 10 50 50";
      <br/>
      <br/>

      <SVGWrapper >
        <svg
          width="100"
          height="100"
          viewBox="10 10 50 50"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"></path>
        </svg>
      </SVGWrapper>
      <br/>

      <hr/>
      So the first thing to note about these examples is that the width and height of the <em>svg viewports</em> have not changed; they remain set to 100 x 100. So that is constantly the size of our 'photos' as they appear in the browser window.
      <br/>
      <br/>
      The second thing is that the viewBox has sort of 'grabbed' or zoomed into an area that is 50 x 50 pixels, taken a 'photo', then given that to the parent svg viewport and said "Hey! Here you go, this is the view using those settings". Then the svg has enlarged or <em>scaled</em> that 'photo' to sit inside the 'frame' of the svg-viewport.
      <br/>
      <br/>
      The third thing to note is that by altering the x/y coords of the viewBox we can move that 50 x 50 square 'lens' around, and take a 'photo' of different areas of the svg-landscape. So we are moving the 50 x 50 viewBox by altering the x/y coords in the settings. It's actually all quite simple once you break it down.
      <hr/>
      <br/>

      If we want to 'zoom in' closer, and get a 'photo' of the eye, we can do so by setting the viewBox to "15 15 30 30".

      <SVGWrapper >
        <svg
          width="100"
          height="100"
          viewBox="15 15 30 30"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"></path>
        </svg>
      </SVGWrapper>
      <br/>

      <p>
        negative x/y translations: viewBox="-10 -10 100 100"

      <SVGWrapper >
        <svg
          width="100"
          height="100"
          viewBox="-10 -10 100 100"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"></path>
        </svg>
      </SVGWrapper>
      <br/>

      The fourth and final thing to note about these introductory examples is that we have been using the <em>same aspect ratio</em> for each one; the initial 'frame' size was set to 100 x 100, and subsequent frame sizes were 50 x 50 and  30 x 30.
      </p>
      <br/>
      <hr/>
      <br/>

      <p>
        Lets set the viewBox aspect-ratio to a value that <em>doesn't</em> match the viewport aspect-ratio  like so;
        <br/>
        viewBox="0 0 400 100".
      </p>
      <br/>

      <SVGWrapper >
        <svg
          width="100"
          height="100"
          viewBox="0 0 400 100"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"></path>
        </svg>
      </SVGWrapper>
      <br/>

      <p>
        Hmmm... what's going on here? Well we have set the width of the viewBox to 400, and the height to 100, so the viewBox is going to have a small height to width ratio, making is stretch out horizontally and crush down vertically. The smiley face has <em>not</em> been distorted, and it looks like the viewport 'lens' has sort of zoomed back to fit the whole of the viewBox into the 'frame'. So by default the image we get of the smiley face will <em>not be stretched or distorted in any way.</em>
      </p>
      <br/>
      <p>
        We can have control over how the viewport deals with viewBoxes that have differing aspect-ratios by using the <strong>'preserveAspectRatio'</strong> attribute. We will look at 'preserveAspectRatio' in the next section.
      </p>

      <ImageFilter>
        <img src={sketch1} width="90%"/>
      </ImageFilter>
      <br/>
    </div>
  );
};

export default BasicStyling;
