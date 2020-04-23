import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {  GlobalNormalizeCSS, GlobalResetCSS, GlobalTypographyCSS, GlobalWebkitScrolling } from './globalStyles';
import Nav from './00Nav';
import SVGBasicStyling from './01SVGBasicStyling';

function App() {
  return (
    <div>
      <GlobalNormalizeCSS/>
      <GlobalResetCSS/>
      <GlobalTypographyCSS/>
      <GlobalWebkitScrolling/>
      <Router>
        <Route path="/" exact={true} component={Nav}/>
        <Route path={`/svg-basic-styling`} component={SVGBasicStyling}/>
      </Router>
    </div>
  );
}

export default App;
