import React, { useEffect, useState, useRef } from 'react';
import { HappySquiggle, RangeSlider } from './style';

const GetPathLengthInReact=()=>{
  const domNode = useRef(null);
  const [values, setValues]=useState({dasharray: 0, dashoffset: 0});
  const [maxVal, setMaxVal]=useState(100);


  const handleChange=(e)=>{
    const { name, value } = e.target;
    setValues({...values, [name]: value });
  };

  useEffect(()=>{
    setMaxVal(Math.floor(domNode.current.children[0].getTotalLength()))
  },[domNode]);

  return (
    <div
      style={{padding: "0.5em"}}
      >
      <div>
        <em style={{color: "red"}}>stroke-dasharray lets you specify the length of the rendered part of the line, then the length of the gap.
          <br/>
          <br/>
        stroke-dashoffset lets you change where the dasharray starts.</em>
      </div>
      <br/>
      <HappySquiggle ref={domNode} {...values}/>

      <strong>stroke-dasharray: {values.dasharray}</strong>
      <RangeSlider
        name="dasharray"
        value={values.dasharray}
        type="range"
        min="0"
        max={maxVal}
        step="1"
        onChange={handleChange}
      />
      <br/>
      <br/>
      <strong>stroke-dashoffset: {values.dashoffset}</strong>
      <RangeSlider
        name="dashoffset"
        value={values.dashoffset}
        type="range"
        min="0"
        max={maxVal}
        step="1"
        onChange={handleChange}
      />
      <br/>
      <br/>

      <div>
        Drag both sliders up to their maximum, then slowly decrease the dashoffset. <em>Voilà, you just made the line draw!</em>
      </div>

    </div>
  );
};

export default GetPathLengthInReact;
