import React from 'react'
import { NavBox, MyLink } from './style';

const NavMenu=()=>{
  return (
    <nav>
      <NavBox>

        <li>
          <MyLink to={`/00-svgs-in-react`}>00 ***START HERE!!!--->****SVGS In React!****--- </MyLink>
        </li>

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
          <MyLink to={`/06-preserveAspectRatio-attribute`}>06 preserveAspectRatio attribute</MyLink>
        </li>

        <li>
          <MyLink to={`/07-preserveAspectRatio-interactive`}>07 interactive preserveAspectRatio </MyLink>
        </li>

        <li>
          <MyLink to={`/08-three-red-feathers`}>08 three red feathers</MyLink>
        </li>

        <li>
          <MyLink to="09-clipping">09 Clipping</MyLink>
        </li>

        <li>
          <MyLink to="10-masking">10 Masking</MyLink>
        </li>

        <li>
          <MyLink to="11-filter-flood">11 Filter: feFlood</MyLink>
        </li>

        <li>
          <MyLink to="12-filter-guassian">12 Filter: feGuassian</MyLink>
        </li>

        <li>
          <MyLink to="13-filter-turbulence">13 Filter: feTurbulence</MyLink>
        </li>

        <li>
          <MyLink to="14-filter-color-matrix">14 Filter: feColorMatrix</MyLink>
        </li>

        <li>
          <MyLink to="15-gradient-linear">15 Gradient:  Linear</MyLink>
        </li>

        <li>
          <MyLink to="16-gradient-radial">16 Gradient: Radial</MyLink>
        </li>

        <li>
          <MyLink to="17-colour-interpolation">17 Pretty!! Colour Interpolation: d3-interpolate PRETTY!!</MyLink>
        </li>

        <li>
          <MyLink to="/18-d3-animating-paths">18  Animating Paths (d3-interpolate)</MyLink>
        </li>

        <li>
          <MyLink to="/19-basic-svg-anim-pulsing-thing">19 Basic SVG Anim Pulsing Thing</MyLink>
        </li>

        <li>
          <MyLink to="/20-svg-background-svgs">20 SVG Background SVGs</MyLink>
        </li>

        <li>
          <MyLink to="21-spinny-thing">21 Spinny Logo Thing</MyLink>
        </li>
      </NavBox>
    </nav>
  );
};

export default NavMenu;
