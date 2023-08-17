import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Main() {
  return (
    <div>
      <button type="button">Reload Webview 1</button>
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
