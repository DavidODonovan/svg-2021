import React from 'react';
import './basic.css';
import StyledSVG from './StyledSVG';

// const square = document.querySelector('.square')
// const hex = document.querySelector('.hexagon')
//
// square.addEventListener('click', ()=>{
//   square.classList.toggle('squareActive')
// })
//
// const squarePathLength = square.getTotalLength()
// const hexPathLength = hex.getTotalLength()
//
// console.log(squarePathLength)
// console.log(hexPathLength)
//
// console.log(square.style.getPropertyValue('stroke-dasharray'))

const CSSAnimationBasic=()=>{
  return (
    <div>
      <StyledSVG/>
      <hr/>
      <svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">

          <path class="square" stroke="#F2A24E" stroke-width="5" d="M228.5 268.5h310v310h-310z"/>

          <circle fill="#F44D3F" cx="384" cy="426" r="98"/>

          <path class="hexagon" d="M311.653 302.423L239.56 426.436l71.342 123.567 143.444-.426 72.092-124.013-71.342-123.567-143.444.426z" stroke="#3932BA" stroke-width="4"/>

          <text font-family="BrushScriptMT, Brush Script MT" font-size="91" font-style="italic" letter-spacing="2.374" fill="#FFF">
          <tspan x="282" y="443">davido</tspan></text>
        </g>
      </svg>
    </div>
  );
};

export default CSSAnimationBasic;
