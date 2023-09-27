import { ipcMain } from 'electron';
import Store from 'electron-store';
import fetch from '../utils/fetch';

const AuthServices = () => {
  ipcMain.on('login-request', async (e, arg) => {
    try {
      const response = await fetch('login', {
        method: 'POST',
        body: JSON.stringify(arg),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const cookie = response.headers.get('set-cookie');
      // get token on Authorization=token
      const cookieToken =
        cookie?.split(';').find((item) => item.includes('Authorization')) || '';
      // remove Authorization= from token
      const token = cookieToken.split('=')[1];
      const store = new Store();
      // save token to electron store
      store.set('token', token);
      e.reply('login-response', await response.json());
    } catch (error: any) {
      e.reply('login-error', { error: true, message: error?.message });
    }
  });
};

export default AuthServices;
