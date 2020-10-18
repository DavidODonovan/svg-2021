import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Slider } from './style'

const RangeSlider=(props)=>{
  const [val, setVal]=useState(props.defaultVal);

  const handleChange=(e)=>{
    setVal(e.target.value);
    props.parentFunc(e, props.targetProperty);
  };

  return (
    <div>
      <Slider
        value={val}
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={handleChange}
      />
      <div>{props.targetProperty}: {val}</div>
    </div>
  );
};

RangeSlider.defaultProps = {min: 0, max: 1, step: 0.01, defaultVal: 1};

export default RangeSlider;
