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
  const [parNone, setParNone]=useState(false);
  const[parX, setParX]=useState('xMid');
  const[parY, setParY]=useState('YMid');
  const[meetOrSlice, setMeetOrSlice]=useState("meet");

  useEffect(()=>{
    if(parNone){
      setPreserveAspectRatio("none")
    } else {
      setPreserveAspectRatio(`${parX}${parY} ${meetOrSlice}`);
    }

  },[parNone,parX,parY,meetOrSlice])





  const changeViewPortWidth=(e)=>{
    setViewPortWidth(e.target.value);
  };

  const changeViewPortHeight=(e)=>{
    setViewPortHeight(e.target.value);
  };

  const changeViewBoxX=(e)=>{
    setViewBoxX(e.target.value);
  };

  const changeViewBoxY=(e)=>{
    setViewBoxY(e.target.value);
  };

  const changeViewBoxWidth=(e)=>{
    setViewBoxWidth(e.target.value);
  };

  const changeViewBoxHeight=(e)=>{
    setViewBoxHeight(e.target.value);
  };

  const changeParX=(e)=>{
    setParX(e.target.value);
  };

  const changeParY=(e)=>{
    setParY(e.target.value);
  };

  const changeMeetOrSlice=(e)=>{
    setMeetOrSlice(e.target.value);
  };

  const changeParNone=()=>{
    setParNone(!parNone);
  };

  return (
    <GridItem>
      <ControlPanel>
        <ControlPanelSection style={{gridArea: "viewport"}}>
          <strong>view<em>port</em></strong>

            <ControlPanelSection style={{marginBottom: "0.5em"}}>
            <div>{`<svg width="${viewPortWidth}" height="${viewPortHeight}"`}</div>
            </ControlPanelSection>

            <ControlPanelSection>
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
        </ControlPanelSection>

        <ControlPanelSection style={{gridArea: "viewBox"}}>
          <strong>viewBox</strong>

          <ControlPanelSection>
          <div>{`viewBox="${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}"`}</div>

          </ControlPanelSection>
          <br/>

          <ControlPanelSection>

            <div>viewBox x
              <select onChange={changeViewBoxX} value={viewBoxX}>
              <option value={0}>0</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
              </select>
            </div>


            <div>viewBox y
              <select onChange={changeViewBoxY} value={viewBoxY}>
              <option value={0}>0</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
              </select>
            </div>


            <div>viewBox width
              <select onChange={changeViewBoxWidth} value={viewBoxWidth}>
              <option value={100}>100</option>
              <option value={150}>150</option>
              <option value={200}>200</option>
              <option value={250}>250</option>
              <option value={300}>300</option>
              <option value={350}>350</option>
              <option value={400}>400</option>
              </select>
            </div>

            <div>viewBox height
              <select onChange={changeViewBoxHeight} value={viewBoxHeight}>
              <option value={100}>100</option>
              <option value={150}>150</option>
              <option value={200}>200</option>
              <option value={250}>250</option>
              <option value={300}>300</option>
              <option value={350}>350</option>
              <option value={400}>400</option>
              </select>
            </div>
          </ControlPanelSection>
        </ControlPanelSection>

        <ControlPanelPAR style={{gridArea: "par"}}>

          <div style={{gridArea: "title"}}>
            <strong>preserveAspectRatio</strong>
            <div>            set to "none":
            <input type="checkbox" onChange={changeParNone} checked={parNone}/>
            </div>
          </div>
          <ControlPanelSection style={{gridArea: "par"}}>
            <div>
              preserveAspectRatio="{`${preserveAspectRatio}`}"
            </div>
          </ControlPanelSection>

          <ControlPanelSection style={{gridArea: "x"}}>
            <strong>x</strong>
            <select onChange={changeParX} value={parX}>
              <option value="xMid">xMid</option>
              <option value="xMin">xMin</option>
              <option value="xMax">xMax</option>
            </select>
          </ControlPanelSection>

          <ControlPanelSection style={{gridArea: "y"}}>
            <strong>y</strong>
            <select onChange={changeParY} value={parY}>
              <option value="YMid">YMid</option>
              <option value="YMin">YMin</option>
              <option value="YMax">YMax</option>
            </select>
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