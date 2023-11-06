import { BrowserView, BrowserWindow, ipcMain, screen, session } from 'electron';
import chalk from 'chalk';
import { Browser } from 'puppeteer';
import { IPCChannels } from '../types';
import * as pie from '../packages/electron-puppeteer';

const getPageUrl = (page:any) => {
const urls =  [
    {
        "key": "notifications",
        "url": "https://onlyfans.com/my/notifications"
    },
    {
        "key": "messages",
        "url": "https://onlyfans.com/my/chats/"
    },
    {
        "key": "collections",
        "url": "https://onlyfans.com/my/collections/user-lists/recent"
    },
    {
        "key": "vault",
        "url": "https://onlyfans.com/my/vault/list/all"
    },
    {
        "key": "queue",
        "url": "https://onlyfans.com/my/queue"
    },
    {
        "key": "statements",
        "url": "https://onlyfans.com/my/statements/earnings"
    },
    {
        "key": "statistics",
        "url": "https://onlyfans.com/my/statistics/statements/earnings"
    },
    {
        "key": "myprofile",
        "url": "https://onlyfans.com/piinkangelbby"
    },
    {
        "key": "newpost",
        "url": "https://onlyfans.com/posts/create"
    }
]

for (const item of urls) {
  if (item.key === page) {
      return item.url;
  }
}
}

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

      const proxyURL = `${arg.proxy.hostname}:${arg.proxy.port}`;

      // Configure the default session to use the proxy.
     await session.fromPartition('persist:' + arg.creatorId).setProxy({
        proxyRules: proxyURL,
      });
    
      const partitionCookies = await session.fromPartition('persist:' + arg.creatorId).cookies.get({name:"auth_id"});

      mainWindow.addBrowserView(ofBrowserView); 
      ofBrowserView.setBounds({
        x: -999999,
        y: -999999, 
        width: 800,
        height: 500
      })
    

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


      const page = await pie.getPage(ofBrowser, ofBrowserView);
      await page.authenticate({
        username : arg.proxy.username,
        password :arg.proxy.password
      })
      
      // ofBrowserView?.setBounds(arg.bounds)
      // return await page.goto('https://iproyal.com/ip-lookup/');

      const pageUrl = getPageUrl(arg.page);

      console.log(pageUrl)
    
      await page.goto(pageUrl as string);
      await page.waitForNavigation();

      if(!partitionCookies.length){
        ofBrowserView?.setBounds(arg.bounds)
        await loginOFAccount();
      }

      if(partitionCookies.length){
        console.log("Already logged in")
        await page.waitForSelector("nav");
         await page.evaluate(() => {
            const nav = document.querySelector("nav");
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
