import React, { useEffect, useState, useRef } from 'react';
import { HappySquiggle } from './style';

const GetPathLengthInReact=()=>{
  const domNode = useRef(null);


  return (
    <div
      style={{padding: "0.5em"}}
      >
      <div>
        You can assign multiple values to a dasharray and get a morse-code like dot dot dash line effect.
      </div>

      <br/>

      <div>
        <strong>stroke-dasharray: 5 2 1 14 2 3 7 8;</strong>
      </div>
      
      <br/>
      <HappySquiggle ref={domNode}/>

    </div>
  );
};

export default GetPathLengthInReact;
