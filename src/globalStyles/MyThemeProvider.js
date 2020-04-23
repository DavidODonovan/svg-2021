import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

const theme = {
primaryDark: '#0D0C1D',
primaryLight: '#EFFFFA',
primaryHover: '#343078',
mobile: '576px'
}

const MyThemeProvider = ({children})=>{
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default MyThemeProvider;
