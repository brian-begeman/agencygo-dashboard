import { BrowserRouter as Router } from 'react-router-dom';
import './styles/reset.css';
import './styles/global.vars.css';
import './App.css';
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppRoutes from './AppRoutes';
import AuthProvider from './contexts/AuthContext';
import { useEffect, useState } from 'react';
import { Switch, useTheme } from '@mui/material';
import theme from './styles/muiTheme';
import lightTheme from './styles/muiTheme';
import darkTheme from './styles/MuiThemeDark';

export default function App() {
  const [currentTheme,setTheme]=useState(true)

  useEffect(() => {
    let theme=localStorage.getItem('theme')
    if(theme===null||theme===undefined||theme===""){
      localStorage.setItem('theme','dark')
    }
  }, []);

  window.addEventListener('storage', (e) => {
    const theme = localStorage.getItem('theme');
    setTheme(theme === 'dark');
  });

   const theme = currentTheme ? darkTheme : lightTheme;
   
console.log("curTheme",currentTheme)
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <CssBaseline />
          {/*<Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />*/}
          <AppRoutes  />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}
