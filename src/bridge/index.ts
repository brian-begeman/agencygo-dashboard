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

      const partitionCookies = await session.fromPartition('persist:' + arg.creatorId).cookies.get({name:"auth_id"});
      console.log("Partition cookies:",partitionCookies)


      mainWindow.addBrowserView(ofBrowserView);  
      // "http://AxhJ7RZrde8cL2Yj:vgari3N0N5lCn0HS@geo.iproyal.com:12321"
      //  await session.fromPartition('persist:' + arg.creatorId).setProxy({
      //   proxyRules : "http=geo.iproyal.com:12321;https=geo.iproyal.com:12321"
      // })
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

      const loginOFAccount = async () => {
        await page.evaluate(() => {
          const posts = document.querySelector(
            'div[data-v-2ec2d052].b-login-posts-outer'
          );
          const footer = document.querySelector('div[data-v-95e6e602]');
          const cookie = document.querySelector('div[data-v-05fbf856]');
          const passwordEye = document.querySelector('.g-input__field-control');
    
    
          if (posts) {
            posts.remove();
          }
          if (footer) {
            footer.remove();
          }
          if (cookie) {
            cookie.remove();
          }
          if(passwordEye){
            passwordEye.remove()
          }
        });
        await page.type('input[at-attr="input"][name="email"]', arg.email);  
        await page.type('input[at-attr="input"][name="password"]', arg.password);
        await page.click('button[at-attr="submit"][type="submit"]');
        await page.waitForTimeout(4000);
        await page.waitForTimeout(5000);
    
        // Check if the captcha element is present
        const captcha = await page.$('iframe[title="reCAPTCHA"]');
    
        if (captcha) {
          console.log("Captcha is there");
        } else {
          console.log("Captcha is not there");
        }
      }

      await page.goto('https://onlyfans.com');
      await page.waitForNavigation();

      if(!partitionCookies.length){
        ofBrowserView?.setBounds(arg.bounds)
        await loginOFAccount();
      }

      if(partitionCookies.length){
        console.log("Already logged in")
        await page.waitForSelector("nav[data-v-7cb0b044]");
         await page.evaluate(() => {
            const nav = document.querySelector("nav[data-v-7cb0b044]");
            if(nav){
              nav?.remove()
            }
          })

        ofBrowserView?.setBounds(arg.bounds)

      }

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
