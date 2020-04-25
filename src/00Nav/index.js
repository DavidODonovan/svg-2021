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

        <li>
          <MyLink to={`/preserveAspectRatio-examples`}>07 preserveAspectRatio examples</MyLink>
        </li>
            </li>

      </NavBox>
    </nav>
  );
};

export default NavMenu;
