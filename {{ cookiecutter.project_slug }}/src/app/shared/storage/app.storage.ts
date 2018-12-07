import { StorageEngine, STORAGE_ENGINE } from '@ngxs/storage-plugin';
import * as _ from 'lodash';

export class AppStorageEngine implements StorageEngine {
    length: number;
    storageKeys = [
        'auth.token',
        'language',
        'count',
    ];

    getItem(key) {
        return window.localStorage.getItem(key);
    }

    setItem(key, value) {
        const state = JSON.parse(value);
        const storage = {};
        for (const storeKey of this.storageKeys) {
            _.set(storage, storeKey, _.get(state, storeKey));
        }
        return window.localStorage.setItem(key, JSON.stringify(storage));
    }

    removeItem(key) {
        return window.localStorage.removeItem(key);
    }

    // tslint:disable-next-line
    key(val: number) {
        console.log(val);
        return 'app.storage';
    }

    clear() {
    }
}

export let appStorageProvider =  {
    provide: STORAGE_ENGINE,
    useClass: AppStorageEngine,
};
