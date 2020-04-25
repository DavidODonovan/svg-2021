import React, { useState } from 'react';
import { GridItem } from './style';

const PaletteModule=()=>{
  const [x, setX]=useState('');
  const [y, sety]=useState('');

  const changeX=(e)=>{
    setX(e.target.value);
  };

  const changeY=(e)=>{
    setX(e.target.value);
  };

  return (

    <GridItem>
      <select onChange={changeX} value={x}>
        <option value="none">none</option>
      </select>

      <select onChange={changeX} value={x}>
        <option value="none">none</option>
      </select>

      <div>preserveAspectRatio="{`${x}${y}`}"</div>

    </GridItem>
  );
};

export default PaletteModule;
