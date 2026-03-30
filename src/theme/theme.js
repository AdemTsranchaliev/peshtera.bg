import { createTheme } from '@mui/material/styles';
import { pz } from './pazardzhikPalette';

const exo = '"Exo 2", "Roboto", "Helvetica Neue", Arial, sans-serif';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: pz.primary,
      dark: '#003618',
      light: pz.navGreen,
    },
    secondary: {
      main: pz.themeGreen,
      dark: '#006b2c',
      light: '#4caf50',
    },
    background: {
      default: pz.pageBg,
      paper: '#ffffff',
    },
    text: {
      primary: pz.primary,
      secondary: '#3d5245',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif',
    h1: { fontFamily: exo, fontWeight: 700 },
    h2: { fontFamily: exo, fontWeight: 700 },
    h3: { fontFamily: exo, fontWeight: 700 },
    h4: { fontFamily: exo, fontWeight: 700 },
    h5: { fontFamily: exo, fontWeight: 600 },
    h6: { fontFamily: exo, fontWeight: 600 },
    subtitle1: { fontWeight: 500 },
    button: { fontWeight: 600, textTransform: 'none' },
  },
  shape: { borderRadius: 2 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 2 },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: { fontWeight: 500 },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});
