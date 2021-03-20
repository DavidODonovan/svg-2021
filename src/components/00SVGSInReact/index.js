import React from 'react';
import { LongStyled, StyledLogo } from './style';
import Test from './Test';

const SVGSInReact=()=>{
  return(
    <div>
      <StyledLogo
        viewportwidth="200"
        viewportheight="200"
        circlefill="purple"
        />
      <div>This is the way we do it: check out source code.</div>
      <div>import as ReactComponent, .attrs and style as you please.</div>
      <LongStyled/>
    </div>
  );
};

export default SVGSInReact;
