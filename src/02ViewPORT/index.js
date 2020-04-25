import React from 'react';
import sketch1 from '../_images/sketch1.jpg';
import { Grid, SVGWrapper, BackLink } from './style';
import { Link } from 'react-router-dom';
import { ReactComponent as Smiley } from '../_images/smiley.svg';
import imageVersion from '../_images/smiley.svg';


const BasicStyling=()=>{
  return (
    <div>
      <BackLink>
        <Link to="/" style={{color: "blue"}}>back to index</Link>
      </BackLink>
      <hr/>
      <strong>02 svg viewport</strong>
      <hr/>
      <p>An svg element is just a 2D 'canvas' with infinite dimensions to all four points of the compass.</p>
      <br/>
      <p>When you set the viewport you are setting up a sort of window of sorts onto that infinite canvas.</p>
      <hr/>
      <img src={sketch1} width="500px"/>
      <hr/>
      <p>You might think of this as being kind of like an astronaut in a satellite orbiting high above the earth. The astronaut has a big window in the bottom of the satellite and can look down at the earth floating by.</p>
      <br/>
      <p>Here we have a viewport of 100 x 100 which opens a 'window' onto our svg element or 'canvas'. Our canvas stretches out to infinity in every direction, but all we can see is the view that this 100 x 100 viewport reveals to us. The surface of that canvas or 'world' has been given a background-color of red, and our yellow smiley face is 'painted' onto the surface of the svg world at a size and location of our choosing. </p>
      <br/>
      <strong>viewport</strong>
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
      Note that we can change the size of our viewport/'window' by using the height and width attributes:
      <br/>

      <SVGWrapper>
        <svg
          width="400"
          height="150"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"></path>
        </svg>
      </SVGWrapper>
      <br/>

      This viewport is 150px high, and 400px wide.
      <br/>
      Also note that the size of the smiley face <em>has not changed at all</em>. You might have expected that by changing the dimensions of our viewport we might change enlarge or stretch the smiley face, but that is not how svgs work; remember the viewport is just a window onto an imaginary svg world that stretches out forever in every direction. Kind of like flatland. You might think of the smiley face not as an image but as a lake or a mountain in flatland: it is defined by a series of lines and planes stretching from coordinate to coordinate.
      <br/>
      <br/>
      We can therefore 'crop' our 'image' by changing the shape of our viewport like so;
      <br/>
      <br/>

      <SVGWrapper>
        <svg
          width="50"
          height="150"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"></path>
        </svg>
      </SVGWrapper>
      <br/>
      <hr/>

    </div>
  );
};

export default BasicStyling;
