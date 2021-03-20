import styled from 'styled-components';

/* set basic svg attributes */
const SVGMaster = styled.input.attrs((props)=>({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '24px',
  height: '24px',
  viewBox: "0 0 24 24",
}))`
  /* your additional styles here */
`;

export default SVGMaster
