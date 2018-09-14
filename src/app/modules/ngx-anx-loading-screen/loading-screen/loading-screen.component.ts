import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime } from 'rxjs/operators';


import { LoadingScreenService } from '../loading-screen.service';

@Component({
    selector: 'anx-loading-screen',
    templateUrl: './loading-screen.component.html',
    styleUrls: [
        './loading-screen.component.scss',
    ],
})
export class LoadingScreenComponent implements OnInit, OnDestroy {

    @Input() debounceTime: number = 200;

    displayLoadingScreen: boolean = false;
    loadingScreenSubscription: Subscription;

    constructor(private loadingScreenService: LoadingScreenService) {
    }

    ngOnInit() {
        this.loadingScreenSubscription = this.loadingScreenService.loadingScreenObservable.pipe(
            debounceTime(this.debounceTime)
        ).subscribe((status: boolean) => {
            this.displayLoadingScreen = status;
        });
    }

    ngOnDestroy() {
        this.loadingScreenSubscription.unsubscribe();
    }
}
