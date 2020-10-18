import React from 'react';
import { StyledHeader, Title } from './style'
import { Link } from 'react-router-dom';

const HeaderLayout=(props)=>{
  return (
    <StyledHeader>
      <Link to="/" style={{ color: "blue"}}>back</Link>
      <Title>{props.children}</Title>
    </StyledHeader>
  );
};

export default HeaderLayout;
