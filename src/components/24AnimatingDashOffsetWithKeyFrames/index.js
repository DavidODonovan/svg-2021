import React, { useEffect, useState, useRef } from 'react';
import { Cube } from './style';

const GetPathLengthInReact=()=>{
  const domNode = useRef(null);


  return (
    <div
      style={{padding: "0.5em"}}
      >
      <br/>

      <br/>
      <Cube ref={domNode}/>

    </div>
  );
};

export default GetPathLengthInReact;
