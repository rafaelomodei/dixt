import { createGlobalStyle } from 'styled-components';
import { theme } from '../themes';

export const GlobalStyle = createGlobalStyle`
  /* html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  } */

  ::-webkit-scrollbar {
    width: 8px;             
  }

  ::-webkit-scrollbar-track {
    background: transparent;        
    border-radius: 16px;
  }

  ::-webkit-scrollbar-thumb {
    /* background-color:  ${theme.colors.brand.tertiary};    */
    background-color: red;
    border-radius: 16px;      
  }

`;
