import React from 'react';
import { render } from 'react-dom';
import App from './App';
import GlobalStyles from './GlobalStyles';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  pink: {
    '50': '#FEE7E9',
    '100': '#FBBBC1',
    '200': '#F99099',
    '300': '#F76471',
    '400': '#F65261',
    '500': '#F65261',
    '600': '#F65261',
    '700': '#F65261',
    '800': '#F65261',
    '900': '#F65261'
  }
};

const theme = extendTheme({ colors });

render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
