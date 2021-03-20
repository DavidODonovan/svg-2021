import React from "react";
import styled, { keyframes } from "styled-components";

const pulseAnim = (colorOne, colorTwo) => keyframes`
  0% {
    fill:${colorOne};
    stroke-width:10px
  }
  50% {
    fill:${colorTwo};
    stroke-width:2px
  }
  100%{
    fill:${colorOne};
    stroke-width:10px
  }
`;

const PulsingCircle = styled.circle`
  animation: ${props => pulseAnim(props.colorone, props.colortwo)} infinite 4s linear;
`;

const TestCircle = styled.circle`
  fill: "purple";
`;

const MyCircle=styled.circle.attrs((props)=>({ fill: "red"}))`
`;

const AnimOne=()=>{
  return (
    <div>
      <svg>

        <MyCircle r="50px" cx="100px" cy="100px"/>

        <PulsingCircle r="100px" colorone="blue" colortwo="purple"/>


      </svg>
    </div>
  );
};

export default AnimOne;
