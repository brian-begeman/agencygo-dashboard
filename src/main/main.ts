/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, shell, BrowserView, screen } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import puppeteer, { Browser } from 'puppeteer';
import * as pie from './packages/electron-puppeteer';
import { delay } from '../renderer/utils';
import startIPCBridge from '../bridge';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';

class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const createWindow = async (browser: Browser) => {
  const winDimens = screen.getPrimaryDisplay().workAreaSize;

  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: true,
    width: winDimens.width,
    height: winDimens.height,
    icon: getAssetPath('icon.png'),
    resizable: false,
    roundedCorners: true,
    frame: true,
  });

  const view1 = new BrowserView({
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  const view2 = new BrowserView({});

  mainWindow.addBrowserView(view1);
  mainWindow.addBrowserView(view2);

  view1.setBounds({
    x: 0,
    y: 26,
    width: Math.round(winDimens.width * 0.25),
    height: 728,
  });
  await view1.webContents.loadURL(resolveHtmlPath('index.html'));

  view2.setBounds({
    x: Math.round(winDimens.width * 0.25),
    y: 26,
    width: Math.round(winDimens.width * 0.75),
    height: 600,
  });

  view2.webContents.openDevTools();

  const window = view2;

  const page = await pie.getPage(browser, window);
  await page.goto('https://onlyfans.com');
  await page.waitForNavigation();
  await page.type(
    'input[at-attr="input"][name="email"]',
    'ankur4736@gmail.com'
  );
  await page.type('input[at-attr="input"][name="password"]', 'Test@123');
  await page.click('button[at-attr="submit"][type="submit"]');

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    startIPCBridge(mainWindow);

    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  view2.webContents.on('dom-ready', async () => {
    await delay(1000);
    const codeString = `
    const twitterBtn = document.querySelector('a[data-v-dd04cece][href="/twitter/auth?csrf=dbqu8c8uba01c97e1fbb7723638670f56be2a320"][class="g-btn m-rounded m-twitter m-md m-block m-icon-absolute m-mb-16"]');
    twitterBtn.remove();
    const googleBtn = document.querySelector(
      'a[data-v-dd04cece][href^="/auth/google"]'
    );
    googleBtn?.remove();
`;

    view2.webContents.executeJavaScript(codeString, true);
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

const main = async () => {
  await pie.initialize(app);
  const browser = await pie.connect(app, puppeteer as any);
  await app.whenReady();
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) createWindow(browser);
  });
};

main();
