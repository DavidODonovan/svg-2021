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

      </NavBox>
    </nav>
  );
};

export default NavMenu;
