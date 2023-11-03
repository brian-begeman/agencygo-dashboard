import { BrowserView, BrowserWindow, ipcMain, screen, session } from 'electron';
import chalk from 'chalk';
import { Browser } from 'puppeteer';
import { IPCChannels } from '../types';
import * as pie from '../packages/electron-puppeteer';

const startIPCBridge = ({
  mainWindow,
  ofBrowser,
}: {
  mainWindow: BrowserWindow;
  ofBrowser: Browser;
}) => {
  const winDimens = screen.getPrimaryDisplay().workAreaSize;
  let ofBrowserView:BrowserView | null = null;

  // eslint-disable-next-line no-console
  console.log(chalk.bgYellow('IPC Bridge Started'));
  ipcMain.on('attempt-login' as IPCChannels, async (e, arg) => {
    try {
      ofBrowserView = new BrowserView({
        webPreferences: {
          partition: 'persist:' + arg.creatorId,
        },
      });

      mainWindow.addBrowserView(ofBrowserView);  
      // "http://AxhJ7RZrde8cL2Yj:vgari3N0N5lCn0HS@geo.iproyal.com:12321"
      //  await session.fromPartition('persist:' + arg.creatorId).setProxy({
      //   proxyRules : "http=geo.iproyal.com:12321;https=geo.iproyal.com:12321"
      // })
      ofBrowserView.setBounds(arg.bounds)
      // const p1 = await pie.getPage(ofBrowser, ofBrowserView);
      // await p1.goto('https://iproyal.com/ip-lookup/');

      // return;
      
      ofBrowserView.setBounds({
        x: -999999,
        y: -999999, 
        width: 800,
        height: 500
      })

      const page = await pie.getPage(ofBrowser, ofBrowserView);
      await page.goto('https://onlyfans.com');
      await page.waitForNavigation();
      await page.evaluate(() => {
        const posts = document.querySelector(
          'div[data-v-2ec2d052].b-login-posts-outer'
        );
        const footer = document.querySelector('div[data-v-95e6e602]');
        const cookie = document.querySelector('div[data-v-05fbf856]');

        if (posts) {
          posts.remove();
        }
        if (footer) {
          footer.remove();
        }
        if (cookie) {
          cookie.remove();
        }
      });
      await page.type('input[at-attr="input"][name="email"]', arg.email);
      await page.type('input[at-attr="input"][name="password"]', arg.password);
      await page.click('button[at-attr="submit"][type="submit"]');
      await page.waitForTimeout(4000)
      ofBrowserView.setBounds(arg.bounds)
      /*     const codeString = `
      const twitterBtn = document.querySelector('a[data-v-dd04cece][href="/twitter/auth?csrf=dbqu8c8uba01c97e1fbb7723638670f56be2a320"][class="g-btn m-rounded m-twitter m-md m-block m-icon-absolute m-mb-16"]');
      twitterBtn.remove();
      const googleBtn = document.querySelector(
        'a[data-v-dd04cece][href^="/auth/google"]'
      );
      googleBtn?.remove();
  `;
 */
    } catch (err) {
      console.log(err);
    }
  });

  ipcMain.on('remove-browser-view', () => {
    if(ofBrowserView){
      mainWindow.removeBrowserView(ofBrowserView);
      ofBrowserView = null;
    }
  } )

};

export default startIPCBridge;
