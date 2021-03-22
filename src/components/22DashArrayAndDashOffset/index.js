import React, { useEffect, useState, useRef } from 'react';
import { HappySquiggle, RangeSlider } from './style';

const GetPathLengthInReact=()=>{
  const domNode = useRef(null);
  const [val, setVal]=useState(0.5);

  const handleChange=(e)=>{
    setVal(e.target.value);
  };

  return (
    <div>

      <input type="range" style={{
        width:"100%",
        background: "gray"
      }}/>

      <HappySquiggle/>

      <RangeSlider
        value={val}
        type="range"
        min="0.01"
        max="1"
        step="0.01"
        onChange={handleChange}
      />

      <div>{val}</div>

    </div>
  );
};

export default GetPathLengthInReact;
