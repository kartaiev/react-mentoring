import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';

export const theme = extendTheme({
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
      }
    }
  }
});
