import React from 'react';
import { Provider } from 'contexts/ReactDims';
import Clip01 from './Clip01';
import Clip02 from './Clip02';

const Clipper=()=>{
  return (
    <div style={{height: "100%", display: "grid", gridGap: "0.2em", gridTemplateRows: "1fr 1fr"}}>
      <Provider>
        <Clip01/>
      </Provider>
      <Provider>
        <Clip02/>
      </Provider>

    </div>
  );
};

export default Clipper;
