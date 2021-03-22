import React, { useState } from 'react';
import { CircularBells } from './style';

const TriggerAnimOnClick=()=>{

  const [buttonState, setButtonState]=useState(false);
  const handleClick=()=>{
    setButtonState(true);
  }

  return (
    <div>
      <div>
        Note: I am using transient props here to prevent an error: <a style={{color: "blue"}} href="https://styled-components.com/docs/api#transient-props">see styled-components docs</a> to explain the weird dollar-sign prefix below: $clicked.
      </div>
      <CircularBells $clicked={buttonState} onClick={handleClick}/>
    </div>
  );
};

export default TriggerAnimOnClick;
