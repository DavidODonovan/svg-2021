import styled from 'styled-components';
import Logo from './logo.svg'


export const SVGWithBackgroundImage=styled.svg.attrs((props)=>({
  height: "200px"
}))`
  background-image: url(${Logo});
  border: 1px solid red;
`;
