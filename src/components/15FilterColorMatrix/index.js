import React from 'react';
import { D3Card } from '../../style';

const FeColorMatrix=()=>{
  return (
    <>
      <D3Card>
        <a target="_blank" style={{color: 'blue'}} href="https://stackoverflow.com/questions/21977929/match-colors-in-fecolormatrix-filter">stack overflow explanation of color matrix</a>
        <hr/>
        <a target="_blank" style={{color: 'blue'}} href="https://alistapart.com/article/finessing-fecolormatrix/">a list apart color matrix tutorial</a>
        <hr/>
        <a target="_blank" style={{color: 'blue'}} href="http://kazzkiq.github.io/svg-color-filter/">A VERY COOL TOOL TO PLAY WITH COLORMATRIX IN REALTIME!</a>
        <hr/>
      </D3Card>
    </>
  );
};

export default FeColorMatrix;

/*   R G B A 1  */
//   0 0 0 0 0 // R = 0*R + 0*G + 0*B + 0*A + 0
//   1 1 1 1 0 // G = 1*R + 1*G + 1*B + 1*A + 0
//   0 0 0 0 0 // B = 0*R + 0*G + 0*B + 0*A + 0
//   0 0 0 1 0 // A = 0*R + 0*G + 0*B + 1*A + 0
