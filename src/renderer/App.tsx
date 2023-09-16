import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/reset.css';
import './styles/global.vars.css';
import './App.css';
import Login from './pages/Auth/Login';
import OnlyfansAccount from './pages/OnlyfansAccount';

function Main() {
  return (
    <div className="App">
      <div style={{ margin: '8px' }}>
        <Link to="/of-account">Onlyfans Account Page</Link>
      </div>
      <div style={{ margin: '8px' }}>
        <Link to="/login">Login Page</Link>
      </div>
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
      </Routes>
    </Router>
  );
}
