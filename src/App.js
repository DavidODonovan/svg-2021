import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {  GlobalNormalizeCSS, GlobalResetCSS, GlobalTypographyCSS, GlobalWebkitScrolling } from './globalStyles';
import Nav from './components/00Nav';
import SVGBasicStyling from './components/01SVGBasicStyling';
import ViewPORT from './components/02ViewPORT';
import ViewPORTCoordinateSystem from './components/03ViewPORTCoordinateSystem';
import UserCoordinateSystem from './components/04UserCoordinateSystem';
import ViewboxAttribute from './components/05ViewboxAttribute';
import PreserveAspectRatio from './components/06PreserveAspectRatio';
import PreserveAspectRatioInteractive from './components/07PreserveAspectRatioInteractive';
import ThreeRedFeathers from './components/08ThreeRedFeathers';
import AnimatingPaths from './components/09AnimatingPaths';
import Clipping from './components/10Clipping';
import Masking from './components/11Masking';
import FilterFlood from './components/12FilterFlood';
import FilterGuassian from './components/13FilterGuassian';
import FilterTurbulence from './components/14FilterTurbulence';
import FilterColorMatrix from './components/15FilterColorMatrix';
import GradientLinear from './components/16GradientLinear';
import GradientRadial from './components/17GradientRadial';


function App() {
  return (
    <div style={{padding: "0.5em", height: "100vh"}}>
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
        <Route path={`/three-red-feathers`} component={ThreeRedFeathers}/>
        <Route path={`/animating-paths`} component={AnimatingPaths}/>
        <Route path={`/10-clipping`} component={Clipping}/>
        <Route path={`/11-masking`} component={Masking}/>
        <Route path={`/12-filter-flood`} component={FilterFlood}/>
        <Route path={`/13-filter-guassian`} component={FilterGuassian}/>
        <Route path={`/14-filter-turbulence`} component={FilterTurbulence}/>
        <Route path={`/15-filter-color-matrix`} component={FilterColorMatrix}/>
        <Route path={`/16-gradient-linear`} component={GradientLinear}/>
        <Route path={`/17-gradient-radial`} component={GradientRadial}/>

      </Router>
    </div>
  );
}

export default App;
