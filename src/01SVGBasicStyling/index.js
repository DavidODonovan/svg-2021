import React from 'react';
import { ReactComponent as Smiley } from '../_images/smiley.svg';
import { Grid, SVGWrapper } from './style';
import { Link } from 'react-router-dom';


const BasicStyling=()=>{
  return (
    <div>
      <Link to="/" style={{color: "blue"}}> back to index</Link>
      <hr/>
      <strong>01 svg styling basics</strong>
      <hr/>
      <div>
        See style.js to look at styling for stroke-linecap etcetera.
        <SVGWrapper>
          <Smiley/>
        </SVGWrapper>
        <p>Note if width or height is not specified, the svg defaults to a width of 300px and height of 150px.
        </p>
        <br/>
        <p style={{color: 'red'}}>
        If you set the height or width (or both) to <strong>auto </strong> for these SVGs the default size for HTML replaced elements will be used: 300px wide, 150px tall....
        </p>
        <br/>
        <p>
        Also, the default size for SVG files that are opened directly in their own browser tab is the full size of the browser window.  width: 100vw; height: 100vh;
        </p>
        <br/>

        <SVGWrapper
          width={100}
          height={100}
          >
          <Smiley/>
        </SVGWrapper>
        <div>
        <p> This smiley face svg has its width & height explicitly set to 100px, which makes for a <strong>viewport</strong> of 100 x 100 pixels.</p>
        <p>So the width and height of the svg element are the width and height of the <strong>svg viewport</strong>.</p>
        <br/>
        </div>
        <br/>
        <hr/>
      </div>
    </div>
  );
};

export default BasicStyling;
