import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#04A1FF',
      contrastText: '#ffffff33',
      light: '#0CFFC0',
    },
    secondary: {
      main: '#0F0F0F',
      contrastText: '#AAAAAA',
    },
  },
});

export default theme;
