import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/reset.css';
import './styles/global.vars.css';
import './App.css';
import Login from './pages/Auth/Login';

function Main() {
  function onclick() {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    window.electron.ipcRenderer.sendMessage('attempt-login', {
      email: email.value,
      password: password.value,
    });
  }

  return (
    <div>
      <input id="email" value="ankur4736@gmail.com" type="email" />
      <input id="password" value="Test@123" type="password" />
      <Link to="/login">Login Page</Link>
      <button onClick={onclick} type="button">
        Auto Login in Webview 1
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
