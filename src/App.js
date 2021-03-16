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
import ColourInterpolation from './components/18ColourInterpolation';


function App() {
  return (
    <div style={{padding: "0.5em", height: "100vh"}}>
      <GlobalNormalizeCSS/>
      <GlobalResetCSS/>
      <GlobalTypographyCSS/>
      <GlobalWebkitScrolling/>
      <Router>
        <Route path="/" exact={true} component={Nav}/>
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

      </Router>
    </div>
  );
}

export default App;
