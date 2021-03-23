import styled, { keyframes } from 'styled-components';
import { ReactComponent as BlobSVG } from './blob.svg';

const rotator=keyframes`
  0% {
    transform: rotate(0);
    }
  100% {
    transform: rotate(360deg);
  }
`;

 const translator=keyframes`
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(20px);
    }
    100% {
      transform: translateX(0px);
    }
 `;

export const SomeDiv=styled.div`
  color: red;
  animation: ${rotator} 500ms 1;
`;

export const BlobHousing = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  border: 1px solid red;
`;

const ZoomOut=styled(BlobSVG).attrs(()=>({
  viewBox: "0 0 250 250"
}))`
`;

export const RedBlob=styled(ZoomOut)`
  position: absolute;
  & path {
    fill: hsla(300, 100%, 50%, 1);
    mix-blend-mode: multiply;
    transform-origin: center;
    animation: ${rotator} 1500ms infinite;
  }
`;

export const BlueBlob = styled(ZoomOut)`
  position: absolute;
  & path {
    fill: hsla(195, 100%, 50%, 1);
    mix-blend-mode: multiply;
    transform-origin: center;
    animation: ${rotator} 1200ms infinite;
  }
`

export const YellowBlob = styled(ZoomOut)`
  position: absolute;
  & path {
    fill: hsla(49, 100%, 50%, 1);
    mix-blend-mode: multiply;
    transform-origin: center;
    animation: ${rotator} 900ms infinite;
  }
`
