import Store from 'electron-store';
import schema from './schema';
import setDefaults from './setDefaults';

const store = new Store<schema>()

setDefaults(store);

export default store;