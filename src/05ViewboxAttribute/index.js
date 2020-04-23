import React from 'react';
import sketch1 from '../_images/sketch1.jpg';
import { Grid, SVGWrapper } from './style';
import { Link } from 'react-router-dom';


const BasicStyling=()=>{
  return (
    <div>
      <Link to="/" style={{color: "blue"}}>back to index</Link>
      <hr/>
      <strong>05 viewBox attribute</strong>
      <hr/>

        <p>
          Using the viewBox attribute, the initial <strong>user coordinate system </strong>can be modified so that it is not identical to the <strong>viewport coordinate system </strong>anymore. 
        </p>
        <br/>

      <img src={sketch1} width="90%"/>
      <br/>
    </div>
  );
};

export default BasicStyling;
