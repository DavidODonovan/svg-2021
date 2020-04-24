import React from 'react';
import sketch1 from '../_images/sketch1.jpg';
import { Grid, SVGWrapper } from './style';
import { Link } from 'react-router-dom';


const BasicStyling=()=>{
  return (
    <div>
      <Link to="/" style={{color: "blue"}}>back to index</Link>
      <hr/>
      <strong>04 USER coordinate system</strong>
      <hr/>
      <p>The <strong>user coordinate system </strong> is the coordinate system <strong><em>on the SVG element,</em></strong> which you might think of as the <em>canvas</em> or  the svg-world where distance stretches infinitely to every horizon. So you might think of this as 'real-world' coordinates in your imaginary world. I think of this coordinate system as kind of like if I was standing on this svg landscape, that I could draw in chalk on the ground a metre by metre grid, radiating outwards forever.
      </p>
      <br/>
      <p>
       This <strong>user coordinate system </strong>is initially identical to the <strong>viewport coordinate system</strong>, in other words it is a one to one mapping. We can change the way the user-coord-system maps to the viewport-coord-system by setting an attribute called the <strong>viewBox</strong>. We will look at the viewBox attribute in the next section.
      </p>
      <br/>

      <img src={sketch1} width="500px"/>

      <br/>
    </div>
  );
};

export default BasicStyling;
