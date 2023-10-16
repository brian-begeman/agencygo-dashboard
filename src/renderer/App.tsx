import { MemoryRouter as Router } from 'react-router-dom';
import './styles/reset.css';
import './styles/global.vars.css';
import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './styles/muiTheme';
import AppRoutes from './AppRoutes';
import AuthProvider from './contexts/AuthContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}
