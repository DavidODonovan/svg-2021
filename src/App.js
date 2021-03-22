import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {  GlobalNormalizeCSS, GlobalResetCSS, GlobalTypographyCSS, GlobalWebkitScrolling } from './globalStyles';
import Nav from './components/00Nav';

import SVGSInReact from './components/00SVGSInReact';
import SVGBasicStyling from './components/01SVGBasicStyling';
import ViewPORT from './components/02ViewPORT';
import ViewPORTCoordinateSystem from './components/03ViewPORTCoordinateSystem';
import UserCoordinateSystem from './components/04UserCoordinateSystem';
import ViewboxAttribute from './components/05ViewboxAttribute';
import PreserveAspectRatio from './components/06PreserveAspectRatio';
import PreserveAspectRatioInteractive from './components/07PreserveAspectRatioInteractive';
import ThreeRedFeathers from './components/08ThreeRedFeathers';
import Clipping from './components/09Clipping';
import Masking from './components/10Masking';
import FilterFlood from './components/11FilterFlood';
import FilterGuassian from './components/12FilterGuassian';
import FilterTurbulence from './components/13FilterTurbulence';
import FilterColorMatrix from './components/14FilterColorMatrix';
import GradientLinear from './components/15GradientLinear';
import GradientRadial from './components/16GradientRadial';
import ColourInterpolation from './components/17ColourInterpolation';
import AnimatingPaths from './components/18AnimatingPaths';
import BasicAnimPulsingThing from './components/19BasicAnimPulsingThing';
import SVGBackgroundSVGs from './components/20SVGBackgroundSVGs';
import AnimateDrawPaths from './components/21AnimateDrawPathsBasic';
import GetPathLengthInReact from './components/22GetPathLengthInReact';

function App() {
  return (
    <div style={{padding: "0.5em", height: "100vh"}}>
      <GlobalNormalizeCSS/>
      <GlobalResetCSS/>
      <GlobalTypographyCSS/>
      <GlobalWebkitScrolling/>

      <Router>

        <Route path="/" exact={true} component={Nav}/>
        <Route path={`/00-svgs-in-react`} component={SVGSInReact}/>
        <Route path={`/01-svg-basic-styling`} component={SVGBasicStyling}/>
        <Route path={`/02-svg-viewport`} component={ViewPORT}/>
        <Route path={`/03-viewport-coordinate-system`} component={ViewPORTCoordinateSystem}/>
        <Route path={`/04-user-coordinate-system`} component={UserCoordinateSystem}/>
        <Route path={`/05-viewBox-attribute`} component={ViewboxAttribute}/>
        <Route path={`/06-preserveAspectRatio-attribute`} component={PreserveAspectRatio}/>
        <Route path={`/07-preserveAspectRatio-interactive`} component={PreserveAspectRatioInteractive}/>
        <Route path={`/08-three-red-feathers`} component={ThreeRedFeathers}/>
        <Route path={`/09-clipping`} component={Clipping}/>
        <Route path={`/10-masking`} component={Masking}/>
        <Route path={`/11-filter-flood`} component={FilterFlood}/>
        <Route path={`/12-filter-guassian`} component={FilterGuassian}/>
        <Route path={`/13-filter-turbulence`} component={FilterTurbulence}/>
        <Route path={`/14-filter-color-matrix`} component={FilterColorMatrix}/>
        <Route path={`/15-gradient-linear`} component={GradientLinear}/>
        <Route path={`/16-gradient-radial`} component={GradientRadial}/>
        <Route path={`/17-colour-interpolation`} component={ColourInterpolation}/>
        <Route path={`/18-d3-animating-paths`} component={AnimatingPaths}/>
        <Route path="/19-basic-svg-anim-pulsing-thing" component={BasicAnimPulsingThing}/>
        <Route path="/20-svg-background-svgs" component={SVGBackgroundSVGs}/>
        <Route path="/21-animate-draw-paths" component={AnimateDrawPaths}/>
        <Route path="/22-get-path-length-in-react" component={GetPathLengthInReact}/>
      </Router>
    </div>
  );
}

export default App;
