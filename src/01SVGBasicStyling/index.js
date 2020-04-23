import React from 'react';
import { ReactComponent as Smiley } from './smiley.svg';
import { Grid, SVGWrapper } from './style';
import { Link } from 'react-router-dom';


const BasicStyling=()=>{
  return (
    <div>
      <Link to="/" style={{color: "blue"}}>back</Link>
      <hr/>
      <div style={{position: "relative"}}>
        <SVGWrapper>
          <Smiley/>
        </SVGWrapper>
        <div>
          Note if no width or height is specified, an svg defaults to a width of 300px and height of 150px.
        </div>
      </div>
    </div>
  );
};

export default BasicStyling;
