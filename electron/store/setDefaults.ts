import Store from 'electron-store';
import storeKeys from "../../keys/storeKeys";
import schema, { defaults } from "./schema";

const setDefaults = (store: Store<schema>) => {

    const keys = Object.values(storeKeys);

    keys.forEach((key: string) => {
        const storeValue = store.get(key);

        if (storeValue === undefined) {

            const defaultValue = defaults[key];

            store.set(key, defaultValue);
        }
    })

}

export default setDefaults;