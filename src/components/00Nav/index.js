import React from 'react'
import { NavBox, MyLink } from './style';

const NavMenu=()=>{
  return (
    <nav>
      <NavBox>

        <li>
          <MyLink to={`/svg-basic-styling`}>01 svg basic styling</MyLink>
        </li>

        <li>
          <MyLink to={`/svg-viewport`}>02 svg viewport</MyLink>
        </li>

        <li>
          <MyLink to={`/viewport-coordinate-system`}>03 viewPORT coordinate system</MyLink>
        </li>

        <li>
          <MyLink to={`/user-coordinate-system`}>04 USER coordinate system</MyLink>
        </li>

        <li>
          <MyLink to={`/viewBox-attribute`}>05 viewBox attribute</MyLink>
        </li>

        <li>
          <MyLink to={`/preserveAspectRatio-attribute`}>06 preserveAspectRatio attribute</MyLink>
        </li>

        <li>
          <MyLink to={`/preserveAspectRatio-interactive`}>07 interactive preserveAspectRatio </MyLink>
        </li>

        <li>
          <MyLink to={`/three-red-feathers`}>08 three red feathers</MyLink>
        </li>

        <li>
          <MyLink to="/animating-paths">09  Animating Paths (d3-interpolate)</MyLink>
        </li>

        <li>
          <MyLink to="10-clipping">10 Clipping</MyLink>
        </li>

        <li>
          <MyLink to="11-masking">11 Masking</MyLink>
        </li>

        <li>
          <MyLink to="12-filter-flood">12 Filter: feFlood</MyLink>
        </li>

        <li>
          <MyLink to="13-filter-guassian">15 Filter: feGuassian</MyLink>
        </li>

        <li>
          <MyLink to="14-filter-turbulence">16 Filter: feTurbulence</MyLink>
        </li>

        <li>
          <MyLink to="15-filter-color-matrix">15 Filter: feColorMatrix</MyLink>
        </li>

        <li>
          <MyLink to="16-gradient-linear">16 Gradient:  Linear</MyLink>
        </li>

        <li>
          <MyLink to="17-gradient-radial">17 Gradient: Radial</MyLink>
        </li>

        <li>
          <MyLink to="18-colour-interpolation">18 Colour Interpolation: d3-interpolateHSL</MyLink>
        </li>

      </NavBox>
    </nav>
  );
};

export default NavMenu;
