import { ipcMain, BrowserWindow } from "electron";
import store from "./store";
import channels from "../keys/channels";
import storeKeys from "../keys/storeKeys";

const ipc = (window: BrowserWindow) => {
    const { MAXIMIZED } = channels;
    const { maximized: maximizedKey } = storeKeys

    ipcMain.on(MAXIMIZED.SET, (event, args) => {
        store.set(maximizedKey, args);
    })

    ipcMain.once(MAXIMIZED.GET, () => {
        const maximized = store.get(maximizedKey);

        window.webContents.send(MAXIMIZED.GET_DONE, maximized);
    })

};

export default ipc;