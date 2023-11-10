// @ts-nocheck

// Used in Renderer process

/**
 * Tell browser view to load URL
 * @param {string} url
 */
const sendEnterURL = (url: string): void => {
  window.electron.ipcRenderer.sendMessage('url-enter', url);
};

/**
 * Tell browser view URL in address bar changed
 * @param {string} url
 */
const sendChangeURL = (url: string): void => {
  window.electron.ipcRenderer.sendMessage('url-change', url);
};

const sendAct = (actName: string): void => {
  window.electron.ipcRenderer.sendMessage('act', actName);
};

/**
 * Tell browser view to goBack
 */
const sendGoBack = (): void => {
  sendAct('goBack');
};

/**
 * Tell browser view to goForward
 */
const sendGoForward = (): void => {
  sendAct('goForward');
};

// Tell browser view to reload
const sendReload = (): void => {
  sendAct('reload');
};

// Tell browser view to stop load
const sendStop = (): void => {
  sendAct('stop');
};

/**
 * Tell browser view to close tab
 * @param {TabID} id
 */
const sendCloseTab = (id: TabID): void => {
  window.electron.ipcRenderer.sendMessage('close-tab', id);
};

/**
 * Create a new tab
 * @param {string} [url]
 * @param {object} [references]
 */
const sendNewTab = (url?: string, references?: object): void => {
  window.electron.ipcRenderer.sendMessage('new-tab', url, references);
};

/**
 * Tell browser view to switch to the specified tab
 * @param {TabID} id
 */
const sendSwitchTab = (id: TabID): void => {
  window.electron.ipcRenderer.sendMessage('switch-tab', id);
};

export {
  sendEnterURL,
  sendChangeURL,
  sendGoBack,
  sendGoForward,
  sendReload,
  sendStop,
  sendNewTab,
  sendSwitchTab,
  sendCloseTab,
};
