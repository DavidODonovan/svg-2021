import React from 'react';
import { SVGWrapper, GridWrapper, BackLink } from './style';
import PaletteModule from './PaletteModule';
import { Link } from 'react-router-dom';

const BlendingPalette=()=>{
  return (
    <div>
      <BackLink>
        <Link to="/" style={{color: "blue"}}>back to index</Link>
      </BackLink>

      <GridWrapper>
        <PaletteModule/>
      </GridWrapper>

    </div>

  )
}

export default BlendingPalette;
//
// <GridWrapper>
//   <PaletteModule/>
//   <PaletteModule/>
//   <PaletteModule/>
//   <PaletteModule/>
//   <PaletteModule/>
//   <PaletteModule/>
// </GridWrapper>
//
