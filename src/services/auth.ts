import { ipcMain } from 'electron';
import Store from 'electron-store';
import fetch from '../utils/fetch';

const testAgencyConfig = {
  agencyName: 'test',
  numberOfCreators: 5,
  websiteUrl: 'www',
  socialMediaLink: 'facebodk',
};

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
      const cookieToken =
        cookie?.split(';').find((item) => item.includes('Authorization')) || '';
      const token = cookieToken.split('=')[1];
      const store = new Store();
      store.set('token', token);
      e.reply('login-response', await response.json());
    } catch (error: any) {
      e.reply('login-error', { error: true, message: error?.message });
    }
  });

  ipcMain.on('logout-request', async (e) => {
    const store = new Store();
    store.delete('token');
    e.reply('logout-response');
  });

  ipcMain.on('verify-request', async (e) => {
    try {
      const store = new Store();
      const response = await fetch('verify', {
        method: 'GET',
        withAuth: true,
      });
      const responseJson = await response.json();
      const user = responseJson?.data?.user || {};
      const agency = responseJson?.data?.agency || {};
      store.set('user', user);
      store.set('agency', agency);
      e.reply('verify-response', responseJson);
    } catch (error: any) {
      e.reply('verify-error', { error: true, message: error?.message });
    }
  });

  ipcMain.on('signup-request', async (e, arg) => {
    try {
      const response = await fetch('users', {
        method: 'POST',
        body: JSON.stringify(arg),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        let body = await response.json();
        let id = body?.data?._id || '651d1d9042f4ee8eb15d611d';
        const createAgencyResponse = await fetch(`agency/${id}`, {
          method: 'POST',
          body: JSON.stringify(testAgencyConfig),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (createAgencyResponse.status === 200) {
          const loginResponse = await fetch('login', {
            method: 'POST',
            body: JSON.stringify({
              email: arg.email,
              password: arg.password,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (loginResponse.status === 200) {
            const cookie = loginResponse.headers.get('set-cookie');
            const cookieToken =
              cookie
                ?.split(';')
                .find((item) => item.includes('Authorization')) || '';
            const token = cookieToken.split('=')[1];
            const store = new Store();
            store.set('token', token);
            e.reply('signup-response', await response.json());
          }
        }
      }
    } catch (error: any) {
      e.reply('signup-error', { error: true, message: error?.message });
    }
  });
};

export default AuthServices;
