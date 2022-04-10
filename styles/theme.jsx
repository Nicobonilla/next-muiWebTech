import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

import Quick from '../assets/Quick.ttf';
import BodoniFLF from '../assets/BodoniFLF.ttf';
import Raleway from '../assets/raleway-v26-latin-regular.ttf';
import Willow from '../assets/ITC-Willow-Font.ttf';
import Kollektif from '../assets/Kollektif.ttf';
import Ostrich from '../assets/ostrich-regular.ttf';

1;

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#393940',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      'Raleway Thin',
      'Quick',
      'BodoniFLF',
      'Kollektif',
      'Willow', 
    ].join(','),
    h5: { // for very top 
      fontSize:'4'
    },
    headerTop: {
      fontSize:'8'
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#000000',
          padding: '0px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face [
          {
          font-family: 'Raleway Thin';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${Raleway}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        },
        {
          font-family: 'Willow';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${Willow}) format('ttf');
        },
        {
          font-family: 'Quick';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${Quick}) format('ttf');
        },
        {
          font-family: 'BodoniFLF';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${BodoniFLF}) format('ttf');
        },
        {
          font-family: 'Kollektif';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${Kollektif}) format('ttf');
        }
      `,
    },
  },
});

export default theme;
