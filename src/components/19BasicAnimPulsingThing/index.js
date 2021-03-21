import React from "react";
import { PulsingCircle, MyCircle } from './style';

const AnimOne=()=>{
  return (
    <svg aria-hidden="true" focusable="false">
      <MyCircle/>
      <PulsingCircle />
    </svg>
  );
};

export default AnimOne;
