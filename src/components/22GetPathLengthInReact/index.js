import React, { useEffect, useRef } from 'react';
import { MyLogo } from './style';

const GetPathLengthInReact=()=>{
  const domNode = useRef(null);

  useEffect(()=>{
    let domNodeCurrent = domNode.current;
    console.log(domNodeCurrent.children[0].id);
    console.log(domNodeCurrent.children[0].children[0].getTotalLength());
  }, [domNode]);
  return (
    <div>
      <MyLogo ref={domNode}/>
    </div>
  );
};

export default GetPathLengthInReact;
