import React from 'react';
import { Provider } from 'contexts/ReactDims';
import FloodOne from './FloodOne';

const FeFlood=()=>{
  return (
    <div style={{ height: "100%"}}>
      <Provider>
        <FloodOne/>
      </Provider>
    </div>
  );
};

export default FeFlood;
