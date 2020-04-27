import React from 'react';
import { ReactComponent as Smiley } from '../_images/smiley.svg';
import { Grid, SVGWrapper, BackLink } from './style';
import { Link } from 'react-router-dom';


const BasicStyling=()=>{
  return (
    <div>
      <BackLink>
        <Link to="/" style={{color: "blue"}}> back to index</Link>
      </BackLink>
      <hr/>
      <strong>01 svg styling basics</strong>
      <hr/>
      <div>
        <SVGWrapper>
          <Smiley/>
        </SVGWrapper>
        <p>Note if width or height is not specified, the svg defaults to a width of 300px and height of 150px.
        </p>
        <br/>
        <p style={{color: 'red'}}>
        <strong>auto</strong>: an important thing to note is that if you set either the height or width,  or both, to <strong>'auto'</strong>, then the browser will default the size of your svg to 300 x 150. Remember that when using grid & flexbox: 'auto' will set the size to 300 x 150!
        </p>
        <br/>
        <p>
        Also remember that when you open an svg directly in a browser window without embedding it in an html document, the browser will automatically display the svg at the full size of the browser window, which corresponds to styling the svg with a width of 100vw and a height of 100vh.
        </p>
        <br/>
        <hr/>

        <div>
        <p> This smiley face svg has its width & height explicitly set to 100px, which makes for a <strong>viewport</strong> of 100 x 100 pixels.</p>
        <p>So in other words when you set the width and height of an svg element, you  are setting the width and height of the <strong><em>svg viewport</em></strong>.
        We will cover the 'viewport' concept in the next section.</p>
        <br/>

        <SVGWrapper
          width={100}
          height={100}
          >
          <Smiley/>
        </SVGWrapper>
            </div>
        <br/>
      </div>
      <hr/>
      note: See style.js to look at styling for stroke-linecap etcetera.

      <hr/>
      <br/>
    </div>
  );
};

export default BasicStyling;
