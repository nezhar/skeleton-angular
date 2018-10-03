import { StorageEngine, STORAGE_ENGINE } from '@ngxs/storage-plugin';

export class AppStorageEngine implements StorageEngine {
    length: number;

    getItem(key) {
        return window.localStorage.getItem(key);
    }

    setItem(key, value) {
        const state = JSON.parse(value);
        state.auth.user = null;
        state.auth.loaded = false;
        return window.localStorage.setItem(key, JSON.stringify(state));
    }

    removeItem(key) {
        return window.localStorage.removeItem(key);
    }

    key(val: number) {
        console.log(val);
        return 'app.storage';
    }

    clear() {
    }
}

export let appStorageProvider =  {
    provide: STORAGE_ENGINE,
    useClass: AppStorageEngine
};
