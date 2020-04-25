import React from 'react';
import { GridWrapper } from './style';
import PaletteModule from './PaletteModule';

const BlendingPalette=()=>{

  return (
      <GridWrapper>
        <PaletteModule/>
        <PaletteModule/>
        <PaletteModule/>
        <PaletteModule/>
        <PaletteModule/>
        <PaletteModule/>
      </GridWrapper>
  );
};

export default BlendingPalette;
