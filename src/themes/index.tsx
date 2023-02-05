import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  colors: {
    brand: {
      background: '#1B1B1B',
      backgroundSecondary: '#242424',
      primary: '#D9D9D9',
      secondary: '#A8A8AA',
      tertiary: '#35373A',
      blue: '#4D7BEF',
      blue110: '#3868DF',
      blue120: '#1D51D3',
      blue140: '#1545BD',
      success: '#009865',
      error: '#C72C39',
    },
  },
  styles: {
    global: {
      html: {
        boxSizing: 'border-box',
      },
      body: {
        // overflow: 'hidden',
        margin: 0,
        padding: 0,
        // bg: '#1B1B1B',
        // color: '#D9D9D9',
        fontSize: '14px',
      },
    },
  },
});
