import { ipcMain, BrowserWindow } from "electron";
import store from "./store";
import channels from "../common/keys/channels";
import storeKeys from "../common/keys/storeKeys";

const ipc = (window: BrowserWindow) => {
    const { MAXIMIZED } = channels;
    const { maximized: maximizedKey } = storeKeys

    ipcMain.on(MAXIMIZED.SET, (event, args: boolean) => store.set(maximizedKey, args));

    ipcMain.once(MAXIMIZED.GET, () => {
        const maximized = store.get(maximizedKey);

        window.webContents.send(MAXIMIZED.GET_DONE, maximized);
    });

};

export default ipc;