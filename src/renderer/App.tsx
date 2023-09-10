import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/reset.css';
import './styles/global.vars.css';
import './App.css';
import Login from './pages/Auth/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}
