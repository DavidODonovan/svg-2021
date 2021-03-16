import React from 'react';
import { Provider } from 'contexts/ReactDims';
import BlackAndWhiteCircles from './BlackAndWhiteCircles';
import VertHot from './VertHot'

const FeGaussianBlur=()=>{
  return (
    <div style={{height: "100%", display: "grid", gridTemplateRows: "1fr 1fr"}}>
      <Provider>
        <BlackAndWhiteCircles/>
      </Provider>
      <Provider>
        <VertHot/>
      </Provider>
    </div>
  );
};

export default FeGaussianBlur;
