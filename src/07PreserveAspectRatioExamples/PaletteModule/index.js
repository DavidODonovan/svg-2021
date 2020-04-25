import React, { useState, useEffect } from 'react';
import { GridItem, SVGWrapper } from './style';

const PaletteModule=()=>{
  return (

    <GridItem>
      <div>lkajsd</div>
      <div>lkajsd</div>
      <SVGWrapper >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox={`0 0 100 100`}
          >
          <path d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"></path>
        </svg>
      </SVGWrapper>
    </GridItem>
  );
};

export default PaletteModule;
