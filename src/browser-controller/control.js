const { ipcRenderer } = require('electron');

const sendEnterURL = url => ipcRenderer.send('url-enter', url);

const sendChangeURL = url => ipcRenderer.send('url-change', url);

const sendAct = actName => {
  ipcRenderer.send('act', actName);
};

const sendGoBack = () => sendAct('goBack');

const sendGoForward = () => sendAct('goForward');

const sendReload = () => sendAct('reload');

const sendStop = () => sendAct('stop');

const sendCloseTab = id => ipcRenderer.send('close-tab', id);

const sendNewTab = (url, references) => ipcRenderer.send('new-tab', url, references);

const sendSwitchTab = id => ipcRenderer.send('switch-tab', id);

module.exports = {
  sendEnterURL,
  sendChangeURL,
  sendGoBack,
  sendGoForward,
  sendReload,
  sendStop,
  sendNewTab,
  sendSwitchTab,
  sendCloseTab
};
