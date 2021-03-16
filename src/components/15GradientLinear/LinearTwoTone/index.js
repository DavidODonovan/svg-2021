import React, { useState, useEffect, useRef } from 'react';
import { withContext } from 'contexts/ReactDims';
import ThePattern from './d3Land/ThePattern';
import { range } from 'd3-array';

const ReactNode=({dims})=>{
  const domNode = useRef(null);
  const [canvas, createCanvas] = useState(null);
  const [data, setData] = useState([]);
  const [vizInitialised, setVizInitialised] = useState(false);

  useEffect(()=>{
    createCanvas(()=>new ThePattern(domNode.current));
    setData(range(0,360,30));
  }, []);

  useEffect(()=>{
    if(data.length>1 && dims.width && vizInitialised===false){
      canvas.init(data, dims);
      setVizInitialised(()=>true);
    }
  }, [data, dims]);

  useEffect(()=>{
    vizInitialised && canvas.updateDims(dims);
  },[dims])

  return(
    <div ref={domNode} style={{height: '100%'}}/>
  )
};

export default withContext(ReactNode);
