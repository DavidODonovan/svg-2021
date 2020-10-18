import React, { useRef, useEffect, useState } from 'react';
import { withContext } from 'contexts/ReactDims';
import ThePattern from './ThePattern';
import { range } from 'd3-array';

const ReactNode=({dims})=>{
  const domNode = useRef(null);
  const [canvas, createCanvas] = useState(null);
  const [vizInitialised, setVizInitialised] = useState(false);
  const [data, setData] = useState([]);

  useEffect(()=>{
    createCanvas(()=>new ThePattern(domNode.current));
    setData(["hello"])
  }, []);

  useEffect(()=>{
    if(data.length>0 && dims.width && vizInitialised===false){
      canvas.init(data, dims);
      setVizInitialised(true);
    }
  }, [data, dims]);

  useEffect(()=>{
    vizInitialised && canvas.updateDims(dims);
  },[dims]);

  return (
    <div ref={domNode} style={{ height: '100%'}}/>
  );
};

export default withContext(ReactNode);
