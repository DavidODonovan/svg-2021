import React, { useEffect, useRef } from 'react';
import { MyLogo } from './style';

const SpinnyThing=()=>{
  const domNode = useRef(null);

  useEffect(()=>{
    let domNodeCurrent = domNode.current
    console.log(domNodeCurrent)
    let stuff = Object.getOwnPropertyNames(domNodeCurrent);
    console.log(stuff)
  }, [domNode])
  // why doesn't this work?
  // need to use react ref..

  return (
    <div>
      <MyLogo ref={domNode}/>
    </div>
  );
};

export default SpinnyThing;
