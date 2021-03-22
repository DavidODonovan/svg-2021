import React, { useEffect, useRef } from 'react';
import { MyLogo } from './style';

const GetPathLengthInReact=()=>{
  const domNode = useRef(null);

  useEffect(()=>{
    let domNodeCurrent = domNode.current;
    console.log(domNodeCurrent)
  }, [domNode]);

  const elementCallback=(elem)=>{
    console.log(elem);
  };

  return (
    <div>
      <MyLogo ref={domNode}/>
    </div>
  );
};

export default GetPathLengthInReact;
