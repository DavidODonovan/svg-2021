import React, { useState, useEffect } from 'react';
import { GridItem, ControlPanel, ControlPanelSection, ControlPanelPAR, DisplaySVG } from './style';

const PaletteModule=()=>{
  const[viewPortWidth, setViewPortWidth]=useState(100);
  const[viewPortHeight, setViewPortHeight]=useState(100);

  const[viewBoxX, setViewBoxX]=useState(0);
  const[viewBoxY, setViewBoxY]=useState(0);
  const[viewBoxWidth, setViewBoxWidth]=useState(100);
  const[viewBoxHeight, setViewBoxHeight]=useState(100);

  const[preserveAspectRatio, setPreserveAspectRatio]=useState("xMidYMid meet");
  const[meetOrSlice, setMeetOrSlice]=useState("meet");

  const changeViewPortWidth=(e)=>{
    setViewPortWidth(e.target.value);
  };

  const changeViewPortHeight=(e)=>{
    setViewPortHeight(e.target.value);
  };

  const changeMeetOrSlice=(e)=>{
    setMeetOrSlice(e.target.value);
  };

  return (

    <GridItem>
      <ControlPanel>
        <ControlPanelSection style={{gridArea: "viewport"}}>
          <strong>viewport</strong>

          <div>viewport width
            <select onChange={changeViewPortWidth} value={viewPortWidth}>
            <option value={100}>100</option>
            <option value={150}>150</option>
            <option value={200}>200</option>
            </select>
          </div>

          <div>viewport height
            <select onChange={changeViewPortHeight} value={viewPortHeight}>
            <option value={100}>100</option>
            <option value={150}>150</option>
            <option value={200}>200</option>
            </select>
          </div>

        </ControlPanelSection>

        <ControlPanelSection style={{gridArea: "viewBox"}}>
          <strong>viewBox</strong>
          <div>viewBox x</div>
          <div>viewBox y</div>
          <div>viewBox width</div>
          <div>viewBox height</div>
        </ControlPanelSection>

        <ControlPanelPAR style={{gridArea: "par"}}>

          <div style={{gridArea: "title"}}><strong>preserveAspectRatio</strong></div>
          <ControlPanelSection style={{gridArea: "par"}}>
            <div>
              preserveAspectRatio="none"
              <input type="checkbox" onChange={()=>{}} checked={true}/>
            </div>
          </ControlPanelSection>

          <ControlPanelSection style={{gridArea: "x"}}>
            <strong>x</strong>
            <div>xmin</div>
            <div>xmid</div>
            <div>xmax</div>
          </ControlPanelSection>

          <ControlPanelSection style={{gridArea: "y"}}>
            <strong>y</strong>
            <div>ymin</div>
            <div>ymid</div>
            <div>ymax</div>
          </ControlPanelSection>

          <ControlPanelSection style={{gridArea: "meetOrSlice"}}>
            <div>meet-or-slice:
              <select onChange={changeMeetOrSlice} value={meetOrSlice}>
                <option value={"meet"}>meet</option>
                <option value={"slice"}>slice</option>
              </select>
            </div>
          </ControlPanelSection>

        </ControlPanelPAR>

      </ControlPanel>

      <DisplaySVG >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={viewPortWidth}
          height={viewPortHeight}
          viewBox={`${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`}
          preserveAspectRatio={preserveAspectRatio}
          >
          <path d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60"></path>
        </svg>
      </DisplaySVG>
    </GridItem>
  );
};

export default PaletteModule;
