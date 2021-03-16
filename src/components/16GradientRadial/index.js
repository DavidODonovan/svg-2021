import React from 'react';
import { Provider } from 'contexts/ReactDims';
import GradientRadialSimple from './GradientRadialSimple';

const RadialGrad=()=>{
  return (
    <div style={{height: "100%", display: "grid", gridTemplateRows: "1fr 1fr"}}>
      <Provider>
        <GradientRadialSimple/>
      </Provider>
    </div>

  );
};

export default RadialGrad;
