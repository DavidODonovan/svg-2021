import React, { useState, useEffect } from 'react';
import { GridItem, SVGWrapper } from './style';

const PaletteModule=()=>{
  const [preserveAlignX, setPreserveAlignX]=useState('');
  const [preserveAlignY, setPreserveAlignY]=useState('');
  const [preserveAspectRatio, setPreserveAspectRatio]=useState("none");

  useEffect(()=>{
    if(preserveAlignX==="" || preserveAlignY===""){
      setPreserveAspectRatio("none");
      setPreserveAlignX("none");
      setPreserveAlignY("none");
    }
  }, [preserveAlignX,preserveAlignY])

  const changePreserveAlignX=(e)=>{
    setPreserveAlignX(e.target.value);
  };

  const changePreserveAlignY=(e)=>{
    setPreserveAlignY(e.target.value);
  };

  return (

    <GridItem>
      alignX:
      <select onChange={changePreserveAlignX} value={preserveAlignX}>
        <option value="none">none</option>
      </select>

      alignY:
      <select onChange={changePreserveAlignX} value={preserveAlignX}>
        <option value="none">none</option>
      </select>

      <div>preserveAspectRatio="{`${preserveAspectRatio}`}"</div>
      <SVGWrapper >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox={`0 0 100 400`}
          preserveAspectRatio={preserveAspectRatio}
          >
          <path d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"></path>
        </svg>
      </SVGWrapper>
    </GridItem>
  );
};

export default PaletteModule;
