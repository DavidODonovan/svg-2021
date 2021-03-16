import React from 'react';
import { Provider } from 'contexts/ReactDims'
import LinearTwoTone from './LinearTwoTone';
import MultiColourGrad from './MultiColourGrad';

const SimpleLinear=()=>{
  return (
    <div style={{height: "100%", display: "grid", gridTemplateRows: "1fr 1fr" }}>
      <Provider>
        <LinearTwoTone/>
      </Provider>
      <Provider>
        <MultiColourGrad/>
      </Provider>
    </div>
  );
};

export default SimpleLinear;
