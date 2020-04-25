import React from 'react';
import { Grid, SVGWrapper, ImageFilter } from './style';
import { Link } from 'react-router-dom';
import sketch1 from '../_images/sketch1.jpg';
import { ReactComponent as Smiley } from '../_images/smiley.svg';


const BasicStyling=()=>{
  return (
    <div>
      <Link to="/" style={{color: "blue"}}>back to index</Link>
      <hr/>
      <strong>06 preserveAspectRatio attribute</strong>
      <hr/>
      <br/>

      <p>
        The preserveAspectRatio attribute is applied to the svg element and is used <em>in unison with the viewBox attribute</em> to control how our 'photo' should scale if the aspect-ratio of the viewBox doesn’t match the aspect ratio of the viewport.
      </p>
      <br/>

      <p>
        The official syntax for preserveAspectRatio is: <strong>preserveAspectRatio="{`<align> [<meetOrSlice>]`}"</strong>
      </p>
      <br/>

      <p>
        Just like viewBox, preserveAspectRatio has a lot of information in a single attribute.
        As stated previously the default behaviour of preserveAspectRatio is to make it such that the resulting 'photo' of our svg-world is not stretched or distorted in any way.
        If we want to explicitly set preserveAspectRatio to this default setting we would do it like so: <strong>preserveAspectRatio="xMidYMid meet".</strong>
      </p>

      <br/>
      <SVGWrapper >
        <svg
          width="100"
          height="100"
          viewBox="0 0 400 100"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"></path>
        </svg>
      </SVGWrapper>
      <br/>

      <p>
        In this example, <strong>xMidYMid </strong>tells the browser to <em>center</em> the scaled viewBox region <em>within </em>the available viewport region, or within our 'frame', and to do so in both the <em>x and y directions.</em> You can replace Mid with Min or Max to align the graphic with one side or the other of our 'photo'.
      </p>
      <br/>
      <p>
        Note that the camelCasing has a lowercase x <em>but an uppercase Y</em>! Watch out for that one!
      </p>
      <br/>

      <p>
        <strong>'meet'</strong> tells the svg viewport to scale our 'photo' until it fits just inside <em>both </em> the height and width of the viewport 'frame'. So that's how we end up with this 'photo';
      </p>

      <br/>
      <SVGWrapper >
        <svg
          width="100"
          height="100"
          viewBox="0 0 400 100"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"></path>
        </svg>
      </SVGWrapper>
      <br/>

      <p>
        Most of the time this default behavior works pretty well: the image is scaled until it just fits both the height and width, and it is centered within any extra space.  </p>
      <hr/>

      <br/>
      <p>
        So the <strong>{`<align>`}</strong> parameter is where we tell the viewport to <strong>scale</strong> the 'photo' from the viewBox in a uniform manner, without stretching or distortion, or not...
      </p>
      <br/>
      <p>
        If we want to squish and stretch our image to conform to the viewport frame, then we can just set the {`<align>`} parameter to "none", like so: align="none";
      </p>
      <br/>

      <br/>
      <SVGWrapper >
        <svg
          width="100"
          height="100"
          viewBox="0 0 400 100"
          preserveAspectRatio="none meet"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"></path>
        </svg>
      </SVGWrapper>
      <br/>
      <p>
        As you can see when we set {`<align>`} to "none", our 'photo' will be scaled to fit inside the viewport without maintaining the aspect ratio. So the 400px width is pushed inside the 'frame', and the 100px height is expanded up to touch the top and bottom of the frame. So our 'lens' has grabbed a 100 x 400 shot of the svg-landscape, and handed it up to the viewport, which has expanded and contracted the shot so that it takes up the entire viewPort frame - and that becomes our 'photo'.
      </p>

      <p>
      All other values of preserveAspectRatio force uniform scaling while preserving the viewbox’s aspect ratio, and specify how to align the viewbox inside the viewport. We’ll get into the values of align shortly.
      </p>
      <br/>

      <p>
      The last argument, meetOrSlice is also optional, and it defaults to meet. This argument specifies whether or not the entire viewBox should be visible inside the viewport. If provided, it is separated from the align parameter by one or more spaces. For example: preserveAspectRatio = "xMinYMin slice"
      </p>
      <br/>


      <ImageFilter>
        <img src={sketch1} width="90%"/>
      </ImageFilter>
      <br/>
    </div>
  );
};

export default BasicStyling;
