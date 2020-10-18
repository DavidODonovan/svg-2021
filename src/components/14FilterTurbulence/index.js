import React from 'react';
import { Provider } from 'contexts/ReactDims';
import SimpleTurbulence from './SimpleTurbulence';

const FeTurbulence=()=>{
  return (
    <div style={{height: "100%"}}>
      <Provider>
        <SimpleTurbulence/>
      </Provider>
    </div>
  );
};

export default FeTurbulence;
