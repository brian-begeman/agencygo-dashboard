import { BrowserView, BrowserWindow, ipcMain, screen, session } from 'electron';
import chalk from 'chalk';
import { Browser } from 'puppeteer';
import { IPCChannels } from '../types';
import * as pie from '../packages/electron-puppeteer';
import fetchReq from '../utils/fetch';
import { error } from 'console';

const startIPCBridge = ({
  mainWindow,
  ofBrowser,
}: {
  mainWindow: BrowserWindow;
  ofBrowser: Browser;
}) => {
  const winDimens = screen.getPrimaryDisplay().workAreaSize;

  // eslint-disable-next-line no-console
  console.log(chalk.bgYellow('IPC Bridge Started'));
  ipcMain.on('attempt-login' as IPCChannels, async (e, arg) => {
    try {
      const ofBrowserView = new BrowserView({
        webPreferences: {
          partition: 'persist:' + arg.creatorId,
        },
      });

      console.log("Partition path",session.fromPartition('persist:' + arg.creatorId).getStoragePath())
      mainWindow.addBrowserView(ofBrowserView);
      ofBrowserView.setBounds({
        x: Math.round(winDimens.width * 0.5),
        y: 26,
        width: Math.round(winDimens.width * 0.5),
        height: Math.round(winDimens.height),
      });

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
};

export default startIPCBridge;
