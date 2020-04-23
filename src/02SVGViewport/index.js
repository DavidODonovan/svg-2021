import React from 'react';
import { ReactComponent as Smiley } from './smiley.svg';
import { Grid, SVGWrapper } from './style';
import { Link } from 'react-router-dom';


const BasicStyling=()=>{
  return (
    <div>
      <Link to="/" style={{color: "blue"}}>back</Link>
      <br/>
      <strong>02 svg viewport</strong>
      <hr/>
    </div>
  );
};

export default BasicStyling;
