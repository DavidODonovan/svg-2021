import styled from 'styled-components';
import { Link } from 'react-router-dom';
export { default as RangeSlider } from './RangeSlider';
export { default as Panel } from './Panel';
export { default as Header } from './Header';

export const StyledLink=styled(Link)`
  color: blue;
`;

export const FlexBox=styled.div`
  display: flex;
  justify-content: space-around;
  background: hsla(0, 0%, 90%, 1);
  border: 1px solid hsla(0, 0%, 70%, 1);
  border-radius: 5px;
  margin: 0.25em;
`;

export const SubTitle=styled.h2`
  font-size: 1.2em;
  font-weight: 600;
`;

export const Button=styled.button`
  color: #fff;
  background-color: hsla(25, 100%, 50%, 1);
  border: 1px solid hsla(15, 100%, 40%, 1);
  border-radius: 4px;
  margin: 1em;
  padding: 0.25em;

  &:hover {
    background-color: hsla(25, 100%, 45%, 1);
  }
`;

export const SelectorDiv=styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5em;
  flex-wrap: wrap;
`;
