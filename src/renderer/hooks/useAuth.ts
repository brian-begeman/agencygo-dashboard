import { useEffect, useState } from 'react';
import { electron } from 'process';
import { IpcRenderer } from 'electron';

interface IResponse {
  isLogin: boolean;
  isAgencyAdmin: boolean;
  isEmployee: boolean;
  permissions: string[];
}

const useAuth = (): IResponse => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    (async () => {
      const token = await window.electron.ipcRenderer.invoke(
        'get-store',
        'token'
      );
      if (token) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    })();
  }, []);

  if (!isLogin) {
    window.electron.ipcRenderer.on('login-response', () => {
      setIsLogin(true);
    });
  } else {
    window.electron.ipcRenderer.on('logout-response', async () => {
      setIsLogin(false);
    });
  }

  return {
    isLogin,
    // TODO: for agency admin and employee check permissions
    isAgencyAdmin: false,
    isEmployee: false,
    permissions: [],
  };
};

export default useAuth;
