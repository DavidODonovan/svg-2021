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

      </NavBox>
    </nav>
  );
};

export default NavMenu;
