import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as url from 'url'
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'
import ipc from './ipc'
import events from './events'
import store from './store'
import storeKeys from '../keys/storeKeys'

let mainWindow: Electron.BrowserWindow | null

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    backgroundColor: '#24292e',
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000')
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }
  
  ipc(mainWindow)

  events(mainWindow)

  const { maximized: maximizedKey } = storeKeys;

  const maximized = store.get(maximizedKey);

  maximized ? mainWindow.maximize() : mainWindow.unmaximize();

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)
  .whenReady()
  .then(() => {
    if (process.env.NODE_ENV === 'development') {
      installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
      installExtension(REDUX_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
    }
  })
app.allowRendererProcessReuse = true
