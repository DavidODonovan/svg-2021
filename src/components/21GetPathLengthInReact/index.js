import React, { useEffect, useState, useRef } from 'react';
import { MyLogo } from './style';

const GetPathLengthInReact=()=>{
  const domNode = useRef(null);
  const [pathLengths, setPathLengths]=useState({});
  const [objectToText, setObjectToText]=useState([]);

  useEffect(()=>{
    let newObj = {};
    let domNodeCurrent = domNode.current;
    let layers = domNodeCurrent.children;
    for(let i=0; i<layers.length; i++){
      let layer = layers[i]
      let layerName = layer.id;
      let pathLength = layer.children[0].getTotalLength();
      newObj[layerName] = Math.floor(pathLength);
    };
    setPathLengths(newObj);
    //
    // console.log(domNodeCurrent.children[0])
    // console.log(domNodeCurrent.children[1])
    // console.log(domNodeCurrent.children[2].children[0])
    // console.log(domNodeCurrent.children[0].id);
    // console.log(domNodeCurrent.children[0].id);
    // console.log(domNodeCurrent.children[0].children[0].getTotalLength());
    // domNodeCurrent.children[0].children[0].style.setProperty("fill", "blue", "important")
    //
  }, [domNode]);

  useEffect(()=>{
    let keys = Object.keys(pathLengths);
    let newArr = keys.map((key)=>{
      return (<li key={key}>{key} : {pathLengths[key]}</li>)
    });
    setObjectToText(newArr);
  },[pathLengths]);

  return (
    <div>
      <div>
        <strong>Path lengths:</strong>
      </div>
      <div>{objectToText}</div>
      <MyLogo ref={domNode}/>
    </div>
  );
};

export default GetPathLengthInReact;
