import React, { useEffect, useRef } from 'react';
import { MyLogo } from './style';

const SpinnyThing=()=>{
  const domNode = useRef(null);

  useEffect(()=>{
    let domNodeCurrent = domNode.current;
  }, [domNode]);

  return (
    <div>
      <MyLogo ref={domNode}/>
    </div>
  );
};

export default SpinnyThing;
