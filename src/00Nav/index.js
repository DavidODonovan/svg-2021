import React from 'react'
import { NavBox, MyLink } from './style';

const NavMenu=()=>{
  return (
    <nav>
      <NavBox>

        <li>
          <MyLink to={`/svg-basic-styling`}>01 svg basic styling</MyLink>
        </li>

      </NavBox>
    </nav>
  );
};

export default NavMenu;
