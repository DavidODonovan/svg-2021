import React from 'react';
import { D3Card } from '../../style';
import BlackAndWhiteCircles from './BlackAndWhiteCircles';
import VertHot from './VertHot'

const FeGaussianBlur=()=>{
  return (
    <>
      <D3Card>
        <BlackAndWhiteCircles/>
      </D3Card>
      <D3Card>
        <VertHot/>
      </D3Card>
    </>
  );
};

export default FeGaussianBlur;
