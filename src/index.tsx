import React from 'react';
import { render } from 'react-dom';
import App from './App';
import GlobalStyles from './GlobalStyles';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import ErrorBoundary from './ErrorBoubary';
import { MoviesProvider } from './contexts/MovieContext';

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

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        fontFamily: 'Mada',
        bg: '#232323',
        color: 'gray.50'
      },
      select: {
        option: {
          bg: '#232323 !important',
          padding: '24px !important'
        }
      },
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline'
        }
      }
    }
  }
});

render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalStyles />
      <ErrorBoundary>
        <MoviesProvider>
          <App />
        </MoviesProvider>
      </ErrorBoundary>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
