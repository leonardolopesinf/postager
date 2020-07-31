import { BrowserWindow } from "electron";
import store from "./store";
import storeKeys from "../common/keys/storeKeys";
import channels from "../common/keys/channels";

const events = (window: BrowserWindow) => {
    const { maximized: maximizedKey } = storeKeys;

    window.on('will-move', () => {
        const { MAXIMIZED } = channels;

        const maximized = store.get(maximizedKey);

        if (maximized) {
            store.set(maximizedKey, false);
            window.webContents.send(MAXIMIZED.SET_DONE, false);
            window.unmaximize();
        }
    })

}

export default events;