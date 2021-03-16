import React from 'react'
import { NavBox, MyLink } from './style';

const NavMenu=()=>{
  return (
    <nav>
      <NavBox>

        <li>
          <MyLink to={`/01-svg-basic-styling`}>01 svg basic styling</MyLink>
        </li>

        <li>
          <MyLink to={`/02-svg-viewport`}>02 svg viewport</MyLink>
        </li>

        <li>
          <MyLink to={`/03-viewport-coordinate-system`}>03 viewPORT coordinate system</MyLink>
        </li>

        <li>
          <MyLink to={`/04-user-coordinate-system`}>04 USER coordinate system</MyLink>
        </li>

        <li>
          <MyLink to={`/05-viewBox-attribute`}>05 viewBox attribute</MyLink>
        </li>

        <li>
          <MyLink to={`/06preserveAspectRatio-attribute`}>06 preserveAspectRatio attribute</MyLink>
        </li>

        <li>
          <MyLink to={`/07-preserveAspectRatio-interactive`}>07 interactive preserveAspectRatio </MyLink>
        </li>

        <li>
          <MyLink to={`/08-three-red-feathers`}>08 three red feathers</MyLink>
        </li>

        <li>
          <MyLink to="09-clipping">10 Clipping</MyLink>
        </li>

        <li>
          <MyLink to="10-masking">11 Masking</MyLink>
        </li>

        <li>
          <MyLink to="11-filter-flood">12 Filter: feFlood</MyLink>
        </li>

        <li>
          <MyLink to="12-filter-guassian">15 Filter: feGuassian</MyLink>
        </li>

        <li>
          <MyLink to="13-filter-turbulence">16 Filter: feTurbulence</MyLink>
        </li>

        <li>
          <MyLink to="14-filter-color-matrix">15 Filter: feColorMatrix</MyLink>
        </li>

        <li>
          <MyLink to="15-gradient-linear">16 Gradient:  Linear</MyLink>
        </li>

        <li>
          <MyLink to="16-gradient-radial">17 Gradient: Radial</MyLink>
        </li>

        <li>
          <MyLink to="17-colour-interpolation">18 Colour Interpolation: d3-interpolate</MyLink>
        </li>

        <li>
          <MyLink to="/18-d3-animating-paths">09  Animating Paths (d3-interpolate)</MyLink>
        </li>

      </NavBox>
    </nav>
  );
};

export default NavMenu;
