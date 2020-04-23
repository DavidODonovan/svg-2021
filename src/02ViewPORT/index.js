import React from 'react';
import sketch1 from '../_images/sketch1.jpg';
import { Grid, SVGWrapper } from './style';
import { Link } from 'react-router-dom';


const BasicStyling=()=>{
  return (
    <div>
      <Link to="/" style={{color: "blue"}}>back to index</Link>
      <hr/>
      <strong>02 svg viewport</strong>
      <hr/>
      <p>An svg element is just a 2D 'canvas' with infinite dimensions to all four points of the compass.</p>
      <br/>
      <p>When you set the viewport you are setting up a sort of window of sorts onto that canvas.</p>
      <br/>
      <p>here is a viewport of 100px onto an svg element, which has a background colour of red: </p>
      <br/>
      <strong>viewport</strong>
      <br/>
      <svg style={{height:"100px", width:"100px", background:"red"}}>
      </svg>
      <hr/>
      Note that you can change the size of your viewport/'window' by using the heigh and width attributes:
      <br/>
      <svg style={{height:"150", width:"100px", background:"red"}}>
      </svg>
      <br/>
      This viewport is 150px high, and 100px wide.
      <hr/>
      <img src={sketch1} width="500px"/>
      <hr/>

    </div>
  );
};

export default BasicStyling;
