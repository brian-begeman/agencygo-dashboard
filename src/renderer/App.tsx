import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useEffect } from 'react';

function Main() {
  const webview1 = React.useRef<any>();

  useEffect(() => {
    window.electron.ipcRenderer.on(
      'webview-cookies-extracted',
      async (arg: any) => {
        console.log(arg);
      }
    );
    webview1.current?.addEventListener('dom-ready', () => {
      window.electron.ipcRenderer.sendMessage('webview-loaded');
      console.log('Event sent');
    });
  }, []);

  return (
    <>
      <div style={{ marginBottom: 20 }} />
      <div>
        <webview
          // eslint-disable-next-line react/no-unknown-property
          nodeintegration
          style={{ width: '800px', height: '300px' }}
          id="view2"
          // eslint-disable-next-line react/no-unknown-property
          partition="1"
          src="https://onlyfans.com/"
          ref={webview1}
        />
      </div>
      <div>
        <button
          onClick={() => {
            webview1.current.reload();
          }}
          type="button"
        >
          Reload Webview 1
        </button>
      </div>
    </>
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
