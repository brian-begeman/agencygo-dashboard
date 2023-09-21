import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#04A1FF',
      contrastText: '#ffffff33',
      light: '#0CFFC0',
      dark: '#3f3f3fff',
    },
    secondary: {
      main: '#0F0F0F',
      contrastText: '#AAAAAA',
      light: '#292929',
    },
    error: {
      main: '#FF0000',
    },
  },
});

export default theme;
