import React from 'react';
import { render } from 'react-dom';
import App from './App';
import GlobalStyles from './GlobalStyles';
import { ChakraProvider } from '@chakra-ui/react';
import ErrorBoundary from './ErrorBoubary';
import { MoviesProvider } from './contexts/MovieContext';
import { theme } from './lib/theme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './state';

const app = (
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalStyles />
      <ErrorBoundary>
        <Router>
          <Provider store={store}>
            <MoviesProvider>
              <App />
            </MoviesProvider>
          </Provider>
        </Router>
      </ErrorBoundary>
    </ChakraProvider>
  </React.StrictMode>
);

render(app, document.getElementById('root'));
