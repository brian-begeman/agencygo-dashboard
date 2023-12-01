import { BrowserWindow, BrowserView, Rectangle, App, IpcMain, IpcMainEvent } from 'electron';
import getPort from 'get-port';
import puppeteer, { Browser, Page, PuppeteerNode } from 'puppeteer-core';
import axios from 'axios';
import { v4 } from 'uuid';

const onlyFansUrlMap: { [key: string]: string } = {
  'notifications': 'https://onlyfans.com/my/notifications',
  'messages': 'https://onlyfans.com/my/chats/',
  'collections': 'https://onlyfans.com/my/collections/user-lists/recent',
  'vault': 'https://onlyfans.com/my/vault/list/all',
  'queue': 'https://onlyfans.com/my/queue',
  'statements': 'https://onlyfans.com/my/statements/earnings',
  'statistics': 'https://onlyfans.com/my/statistics/statements/earnings',
  'myprofile': 'https://onlyfans.com/',
  'newpost': 'https://onlyfans.com/posts/create',
};

type BrowserReport = {
  Browser: string;
  'Protocol-Version': string;
  'User-Agent': string;
  'V8-Version'?: string;
  'WebKit-Version'?: string;
  webSocketDebuggerUrl: string;
}

type PievAction = {
  creatorId: string;
  page: string;
  email: string;
  password: string;
  bounds: Rectangle;
}

export default class PuppeteerInElectronView {
  views: Map<string, BrowserView> = new Map<string, BrowserView>();
  window: BrowserWindow | null = null;
  browser: Browser | null = null;
  currentView: BrowserView | null = null;
  constructor() {}

  async initalize(app: App, ipc: IpcMain, port?: number) {
    if (app.commandLine.getSwitchValue("remote-debugging-port")) {
      throw new Error("The electron application is already listening on a port. Double `initialize`?");
    }

    const actualPort = port === undefined ? await getPort({host: "127.0.0.1"}) : port;
    app.commandLine.appendSwitch(
      "remote-debugging-port",
      `${actualPort}`
    );
    app.commandLine.appendSwitch(
      "remote-debugging-address",
      "127.0.0.1"
    );
    app.commandLine.appendSwitch(
      "enable-features",
      "NetworkService"
    );
    await app.whenReady();
    const json = await axios.get<BrowserReport>(`http://127.0.0.1:${actualPort}/json/version`).catch(err => console.log(err));
    if (!json) {
      throw new Error('Unable to connect to electron debug url');
    } 
    this.browser = await puppeteer.connect({
      browserWSEndpoint: json.data.webSocketDebuggerUrl,
      defaultViewport: null,
    });
    ipc.on('piev-event', this.handleIpc.bind(this));
  }

  async handleIpc(event: IpcMainEvent, ...args: any[]) {
    if (this.window && this.browser) {
      const action: PievAction = args[0];
      // Does it already exist?
      let view = this.views.get(action.creatorId);
      if (!view) view = this.addView(action.creatorId);
      this.attachView(action.creatorId, action.bounds);
      const page = await this.getPage(view);
      // this.runAction(action, page);
    }  
  }


  addWindow(window: BrowserWindow) {
    this.window = window;
  }

  addView(creatorId: string, config?: {
    proxy: {
      host: string;
      port: number;
      username: string;
      password: string;
    };
    userDirS3: string;
  }): BrowserView {
    const view = new BrowserView({
      webPreferences: {
        partition: `persist:${creatorId}`,
      }
    });
    view.setAutoResize({
      vertical: true,
      horizontal: true,
    });
    this.views.set(creatorId, view);
    return view;
  }

  attachView(creatorId: string, bounds: Rectangle) {
    const view = this.views.get(creatorId);
    if (this.window && view && view !== this.currentView) {
      if (this.currentView) {
        this.window.removeBrowserView(this.currentView);
      }
      this.window.addBrowserView(view);
      view.setBounds(bounds);
      this.currentView = view;
    }
  }

  detachView(creatorId: string) {
    const view = this.views.get(creatorId);
    if (this.window && view) {
      this.window.removeBrowserView(view);
    }
  }

  async getPage(view: BrowserView): Promise<Page | void> {
    if (this.window && this.browser && view) {
      const guid = v4();
      await this.window.webContents.loadURL('about:blank');
      await this.window.webContents.executeJavaScript(`window.puppeteer = "${guid}"`);
      const pages = await this.browser.pages();
      const guids = await Promise.all(pages?.map(async (_page) => await _page.evaluate('window.puppeteer')));
      const index = guids.findIndex((_guid) => _guid === guid);
      const page = pages[index];
      return page;
    }
  }

  navigateView(creatorId: string, page: string) {
    const view = this.views.get(creatorId);
    const url = onlyFansUrlMap[page];
    if (view && url) {
      // const page = await pie
    }
  }
}