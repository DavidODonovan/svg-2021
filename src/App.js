import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {  GlobalNormalizeCSS, GlobalResetCSS, GlobalTypographyCSS, GlobalWebkitScrolling } from './globalStyles';
import AppWrapper from './AppWrapper';
import Nav from './00Nav';
import SVGBasicStyling from './01SVGBasicStyling';
import ViewPORT from './02ViewPORT';
import ViewPORTCoordinateSystem from './03ViewPORTCoordinateSystem';
import UserCoordinateSystem from './04UserCoordinateSystem';
import ViewboxAttribute from './05ViewboxAttribute';
import PreserveAspectRatio from './06PreserveAspectRatio';
import PreserveAspectRatioInteractive from './07PreserveAspectRatioInteractive';
import WimCrouwelSidewaysFontPlay from './08WimCrouwelSidewaysFontPlay';
import ThreeRedFeathers from './09ThreeRedFeathers';

function App() {
  return (
    <div style={{padding: "0.5em"}}>
      <GlobalNormalizeCSS/>
      <GlobalResetCSS/>
      <GlobalTypographyCSS/>
      <GlobalWebkitScrolling/>
      <Router>
        <Route path="/" exact={true} component={Nav}/>
        <Route path={`/svg-basic-styling`} component={SVGBasicStyling}/>
        <Route path={`/svg-viewport`} component={ViewPORT}/>
        <Route path={`/viewport-coordinate-system`} component={ViewPORTCoordinateSystem}/>
        <Route path={`/user-coordinate-system`} component={UserCoordinateSystem}/>
        <Route path={`/viewBox-attribute`} component={ViewboxAttribute}/>
        <Route path={`/preserveAspectRatio-attribute`} component={PreserveAspectRatio}/>
        <Route path={`/preserveAspectRatio-interactive`} component={PreserveAspectRatioInteractive}/>
        <Route path={`/wim-crouwel-sideways-font-play`} component={WimCrouwelSidewaysFontPlay}/>
        <Route path={`/three-red-feathers`} component={ThreeRedFeathers}/>

      </Router>
    </div>
  );
}

export default App;
