import React from 'react';
import { Provider } from 'contexts/ReactDims';
import Mask01 from './Mask01'

const MaskingSimple=()=>{
  return (
    <div style={{height: "50%"}}>
      <Provider>
        <Mask01/>
      </Provider>
    </div>
  );
};

export default MaskingSimple;
