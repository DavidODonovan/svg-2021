import React from 'react';
import { ReactComponent as Smiley } from './smiley.svg';
import { Grid, SVGWrapper } from './style';
import { Link } from 'react-router-dom';


const BasicStyling=()=>{
  return (
    <div>
      <Link to="/" style={{color: "blue"}}>back</Link>
      <br/>
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
        <p>The width and height of the svg element are the dimensions of the <strong>viewport</strong>.</p>
        <br/>
        <hr/>

        <SVGWrapper
          width='100'
          height='100'
          >
          <Smiley/>
        </SVGWrapper>
        <div>
          svg with width & height explicitly set to 100px.
        </div>
        <br/>
        <hr/>
      </div>
    </div>
  );
};

export default BasicStyling;
