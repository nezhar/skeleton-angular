import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoadingScreenService {
    /**
     * Loader observable
     */
    public loadingScreenObservable = new Subject<boolean>();

    /**
     * Show loader
     */
    show() {
        console.log('Loading screen:: display');
        this.loadingScreenObservable.next(true);
    }

    /**
     * Hide loader
     */
    hide() {
        console.log('Loading screen:: hide');
        this.loadingScreenObservable.next(false);
    }
}