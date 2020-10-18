import styled from 'styled-components';

export const DarkDiv=styled.div`
  background-color: ${({alpha})=>{
    if(alpha)
      return `hsla(0, 0%, 0%, ${alpha})`
    return `hsla(0, 0%, 0%, 0.2)`
  }};
  color: #fff;
  mix-blend-mode: luminosity;
  border-radius: 3px;
  font-size: 0.85em;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 0.2em;
  margin: 0.2em;
`;
