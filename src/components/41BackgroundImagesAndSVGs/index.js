import React from 'react';
import { Link } from 'react-router-dom';
import { SVGWithBackgroundImage } from './style';

const CustomSwitchesMKI=()=>{
  return (
    <div>
      <strong>Background Images</strong>
      <br/>
      <SVGWithBackgroundImage width="100%" height="300">
        <circle r="40px" cx="100px" cy="100px"/>
      </SVGWithBackgroundImage>

    </div>
  );
};

export default CustomSwitchesMKI;
