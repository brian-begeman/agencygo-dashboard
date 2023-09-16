import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/reset.css';
import './styles/global.vars.css';
import './App.css';
import { Stack } from '@mui/material';
import Login from './pages/Auth/Login';
import OnlyfansAccount from './pages/OnlyfansAccount';
import DashboardPage from './pages/DasboardPage';

function Main() {
  return (
    <div className="App">
      <Stack spacing={2}>
        <Link to="/login">Login Page</Link>
        <Link to="/dashboard">Dashboard Page</Link>
        <Link to="/of-account">Onlyfans Account Page</Link>
      </Stack>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/of-account" element={<OnlyfansAccount />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}
