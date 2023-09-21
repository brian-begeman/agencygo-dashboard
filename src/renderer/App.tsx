import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/reset.css';
import './styles/global.vars.css';
import './App.css';
import { Stack, ThemeProvider } from '@mui/material';
import Login from './pages/Auth/Login';
import OnlyfansAccount from './pages/OnlyfansAccount';
import DashboardPage from './pages/DasboardPage';
import ManagerSuite from './pages/ManagerSuite';
import EmployeeShifts from './pages/EmployeeShifts';
import ManageCreators from './pages/ManageCreators';
import theme from './styles/muiTheme';
import Notification from './pages/Notification';
import HomePage from './pages/HomePageContent';
import ManageEmployees from './pages/ManageEmployees';
import SmartTags from './pages/Growth/SmartTags';

function Main() {
  return (
    <div className="App">
      <Stack spacing={2}>
        <Link to="/login">Login Page</Link>
        <Link to="/home">Home Page</Link>
        <Link to="/dashboard">Dashboard Page</Link>
        <Link to="/of-account">Onlyfans Account Page</Link>
        <Link to="/manager-suite">Only Manager Suite</Link>
        <Link to="/employees-manage-shifts">Employee shifts ui</Link>
        <Link to="/creators">Manage Creators</Link>
        <Link to="/notification">Notification</Link>
        <Link to="/employees-manage-employees">Manage Employees</Link>
        <Link to="/growth-smart-tags">Growth / Smart Tags</Link>
      </Stack>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/of-account" element={<OnlyfansAccount />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/manager-suite" element={<ManagerSuite />} />
          <Route path="/creators" element={<ManageCreators />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/employees-manage-employees"
            element={<ManageEmployees />}
          />
          <Route path="/employees-manage-shifts" element={<EmployeeShifts />} />
          <Route path="/growth-smart-tags" element={<SmartTags />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
