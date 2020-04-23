import React from 'react';
import { ReactComponent as Smiley } from './smiley.svg';
import { SVGWrapper } from './style';

const BasicStyling=()=>{
  return (
    <div>
      <SVGWrapper>
        <Smiley/>
      </SVGWrapper>
    </div>
  );
};

export default BasicStyling;
