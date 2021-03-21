import React from 'react';
import { Provider } from 'contexts/ReactDims';
import InterpolateSimple from './InterpolateSimple';

const ColourInterpolate=()=>{
  return (
    <div style={{
      height: "100%",
      background: "hsla(300, 100%, 3%, 1)"
    }}>
      <div>colour interpolations</div>
      <div style={{height: "100%", display: "grid", gridTemplateRows: "1fr 0.5fr"}}>
        <Provider>
          <InterpolateSimple/>
        </Provider>
      </div>
    </div>

  );
};

export default ColourInterpolate;
