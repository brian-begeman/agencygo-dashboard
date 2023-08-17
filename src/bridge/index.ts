import { BrowserWindow, ipcMain, session } from 'electron';
import settings from 'electron-settings';
import { IPCChannels } from '../types';

const startIPCBridge = (mainWindow: BrowserWindow) => {
  ipcMain.on('webview-loaded' as IPCChannels, async () => {
    const cookies = await session.fromPartition('1').cookies.get({});
    settings.setSync({ webview: JSON.stringify(cookies) });
    mainWindow.webContents.send(
      'webview-cookies-extracted' as IPCChannels,
      cookies
    );
  });
};

export default startIPCBridge;
