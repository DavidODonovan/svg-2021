import React, { useState, useEffect } from 'react';
import { GridItem, Button, ControlPanel, ControlPanelSection, ControlPanelPAR, DisplaySVG } from './style';

const PaletteModule=()=>{
  const [shapeSelection, setShapeSelection]=useState("smiley");
  const [viewPortWidth, setViewPortWidth]=useState(100);
  const [viewPortHeight, setViewPortHeight]=useState(100);

  const [viewBoxX, setViewBoxX]=useState(0);
  const [viewBoxY, setViewBoxY]=useState(0);
  const [viewBoxWidth, setViewBoxWidth]=useState(100);
  const [viewBoxHeight, setViewBoxHeight]=useState(100);

  const [preserveAspectRatio, setPreserveAspectRatio]=useState("xMidYMid meet");
  const [parNone, setParNone]=useState(false);
  const [parX, setParX]=useState('xMid');
  const [parY, setParY]=useState('YMid');
  const [meetOrSlice, setMeetOrSlice]=useState("meet");

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

  const shapes={
    smiley: (
          <>
            <path
              d="M50,10 A40,40,1,1,1,50,90
                 A40,40,1,1,1,50,10
                 M30,40 Q36,35,42,40
                 M58,40 Q64,35,70,40
                 M30,60
                 Q50,75,70,60
                 Q50,75,30,60"></path>
          </>
    ),
    tallTriangle: (
          <>
            <polygon
              points="50 0
                      100 200
                      0 200"></polygon>
          </>
    ),

      wideTriangle: (
          <>
            <polygon
              points="100 0
                      200 50
                      0 50"></polygon>
          </>
    )
  };

  return (
    <GridItem>
      <ControlPanel>
        <ControlPanelSection style={{gridArea: "viewport"}}>
          <strong>view<em>port</em></strong>

            <ControlPanelSection style={{marginBottom: "0.5em", border: "1px solid red"}}>
            <div>{`<svg width="${viewPortWidth}" height="${viewPortHeight}"`}</div>
            </ControlPanelSection>

            <ControlPanelSection>
            <div>viewport width
              <select
               onChange={changeViewPortWidth} value={viewPortWidth}>
                <option value={100}>100</option>
                <option value={150}>150</option>
                <option value={200}>200</option>
                <option value={250}>250</option>
                <option value={300}>300</option>
              </select>
            </div>

            <div>viewport height
              <select onChange={changeViewPortHeight} value={viewPortHeight}>
                <option value={100}>100</option>
                <option value={150}>150</option>
                <option value={200}>200</option>
                <option value={250}>250</option>
                <option value={300}>300</option>
              </select>
            </div>
        </ControlPanelSection>
        </ControlPanelSection>

        <ControlPanelSection style={{gridArea: "viewBox"}}>
          <strong>viewBox</strong>

          <ControlPanelSection style={{border: "1px solid red"}}>
          <div>{`viewBox="${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}"`}</div>

          </ControlPanelSection>
          <br/>

          <ControlPanelSection>

            <div>viewBox x origin:
              <select onChange={changeViewBoxX} value={viewBoxX}>
                <option value={-50}>-50</option>
                <option value={-40}>-40</option>
                <option value={-30}>-30</option>
                <option value={-20}>-20</option>
                <option value={-10}>-10</option>
                <option value={0}>0</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={40}>40</option>
                <option value={50}>50</option>
              </select>
            </div>


            <div>viewBox y origin:
              <select onChange={changeViewBoxY} value={viewBoxY}>
                <option value={-50}>-50</option>
                <option value={-40}>-40</option>
                <option value={-30}>-30</option>
                <option value={-20}>-20</option>
                <option value={-10}>-10</option>
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
                <option value={0}>0</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
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
                <option value={0}>0</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
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
            <strong>preserveAspectRatio</strong> --FIT VIEWBOX <em>INSIDE</em> VIEWPORT
            <div>            set to "none":
            <input type="checkbox" onChange={changeParNone} checked={parNone}/>
            </div>
            <div>
              if set to "none", <em>viewBox</em> is stretched & compressed so it all fits into the view<em>port</em>
            </div>
          </div>
          <ControlPanelSection style={{gridArea: "par", border: "1px solid red"}}>
            <div>
              preserveAspectRatio="{`${preserveAspectRatio}`}"
            </div>
          </ControlPanelSection>

          <ControlPanelSection style={{gridArea: "xy" , flexDirection: "row"}}>
            <ControlPanelSection >
              <strong>x</strong>
              <select onChange={changeParX} value={parX}>
                <option value="xMin">xMin</option>
                <option value="xMid">xMid</option>
                <option value="xMax">xMax</option>
              </select>
            </ControlPanelSection>

            <ControlPanelSection >
              <strong>y</strong>
              <select onChange={changeParY} value={parY}>
                <option value="YMin">YMin</option>
                <option value="YMid">YMid</option>
                <option value="YMax">YMax</option>
              </select>
            </ControlPanelSection>
          </ControlPanelSection>

          <ControlPanelSection style={{gridArea: "meetOrSlice"}}>
            <div>meet-or-slice:
              <select onChange={changeMeetOrSlice} value={meetOrSlice}>
                <option value={"meet"}>meet</option>
                <option value={"slice"}>slice</option>
              </select>
              -- CROP OR NO-CROP.
            </div>
          </ControlPanelSection>

        </ControlPanelPAR>

      </ControlPanel>

      <DisplaySVG >
        <div>
          <Button onClick={()=>setShapeSelection("smiley")}>smiley</Button>
          <Button onClick={()=>setShapeSelection("tallTriangle")}>tallTriangle</Button>
          <Button onClick={()=>setShapeSelection("wideTriangle")}>wideTriangle</Button>
        </div>
        <svg
          width={viewPortWidth}
          height={viewPortHeight}
          style={{border: "3px solid black"}}
          viewBox={`${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`}
          preserveAspectRatio={preserveAspectRatio}
          >
          {shapes[shapeSelection]}
          <rect x={viewBoxX} y={viewBoxY} width={viewBoxWidth} height={viewBoxHeight} fill="none" stroke="red" strokeWidth="4"></rect>
        </svg>
      </DisplaySVG>
    </GridItem>
  );
};

export default PaletteModule;
