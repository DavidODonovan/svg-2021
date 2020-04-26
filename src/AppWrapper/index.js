import React from 'react';
import { BackgroundImage } from './style';

const AppWrapper=({children})=>{
  return (
    <div>
      {children}
      <BackgroundImage/>
    </div>
  );
};

export default AppWrapper;
