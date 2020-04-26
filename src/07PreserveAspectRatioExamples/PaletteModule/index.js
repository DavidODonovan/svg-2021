import React, { useState, useEffect } from 'react';
import { GridItem, ControlPanel, ControlPanelSection, DisplaySVG } from './style';

const PaletteModule=()=>{
  return (

    <GridItem>
      <ControlPanel>
        <ControlPanelSection style={{gridArea: "viewport"}}>
           <strong>viewport</strong>
          <div>viewport width</div>
          <div>viewport height</div>
        </ControlPanelSection>

        <ControlPanelSection style={{gridArea: "viewBox"}}>
          <div>viewBox x</div>
          <div>viewBox y</div>
          <div>viewBox width</div>
          <div>viewBox height</div>
        </ControlPanelSection>

        <ControlPanelSection style={{gridArea: "par"}}>
          <div>preserveAspectRatio</div>
          <div>xmin</div>
          <div>xmid</div>
          <div>xmax</div>
          <div>ymin</div>
          <div>ymid</div>
          <div>ymax</div>
          <div>align meetormid</div>
          <div>
            <div>"none"</div>
            <input type="checkbox" onChange={()=>{}} checked={true}/>
          </div>
        </ControlPanelSection>

      </ControlPanel>

      <DisplaySVG >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox={`0 0 100 100`}
          >
          <path d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"></path>
        </svg>
      </DisplaySVG>
    </GridItem>
  );
};

export default PaletteModule;
