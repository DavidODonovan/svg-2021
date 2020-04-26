import styled from 'styled-components';
import img from './googleEarth.jpg';

export const BackgroundImage=styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: hsla(0, 0%, 50%, 1);
  filter: blur(20px) brightness(0.8) saturate(80%);

  // this transform removes white halo from edges of image!
  transform: scale(1.2);
`;
