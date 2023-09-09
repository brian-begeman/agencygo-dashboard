import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Main() {
  return (
    <div>
      <input name="email" type="email" />
      <input name="password" type="password" />
      <button type="button">Auto Login in Webview 1</button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
