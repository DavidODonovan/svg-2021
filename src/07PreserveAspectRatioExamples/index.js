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
        <div></div>
        <div></div>
        <div></div>

        <div></div>
        <div></div>
        <div></div>

        <div></div>
        <div></div>
        <SVGWrapper>
          <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 65 187"
            preserveAspectRatio="none"
            >
            <polygon
              points="32.5 0 65 187 0 187"></polygon>
          </svg>
        </SVGWrapper>
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
