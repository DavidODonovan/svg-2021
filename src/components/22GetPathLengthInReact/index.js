import React, { useEffect, useRef } from 'react';
import { MyLogo } from './style';

const GetPathLengthInReact=()=>{
  const domNode = useRef(null);

  // use a nested for-loop to iterate over children
  // try a recursive approach
  useEffect(()=>{
    let domNodeCurrent = domNode.current;
    console.log(domNodeCurrent.children[0].id);
    console.log(domNodeCurrent.children[0]["id"]);
    console.log(domNodeCurrent.children[0].children[0].getTotalLength());
    domNodeCurrent.children[0].children[0].style.setProperty("fill", "blue", "important")//<--why isn't this working?..

  }, [domNode]);
  return (
    <div>
      <MyLogo ref={domNode}/>
    </div>
  );
};

export default GetPathLengthInReact;
