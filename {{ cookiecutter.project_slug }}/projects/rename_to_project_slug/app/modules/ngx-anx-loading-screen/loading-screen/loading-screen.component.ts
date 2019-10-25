import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


import { LoadingScreenService } from '../loading-screen.service';

@Component({
    selector: 'anx-loading-screen',
    templateUrl: './loading-screen.component.html',
    styleUrls: [
        './loading-screen.component.scss',
    ],
})
export class LoadingScreenComponent implements OnDestroy, AfterViewInit {

    @Input() debounceTime: number = 200;
    loadingScreenSubscription: Subscription;

    constructor(private loadingScreenService: LoadingScreenService,
                private elementRef: ElementRef,
                private changeDetectorRef: ChangeDetectorRef) {
    }

    ngAfterViewInit(): void {
        // Hide the loading screen after init
        this.elementRef.nativeElement.style.display = 'none';

        this.loadingScreenSubscription = this.loadingScreenService.loadingScreenObservable.pipe(
            debounceTime(this.debounceTime),
        ).subscribe((status: boolean) => {
            this.elementRef.nativeElement.style.display = status ? 'block' : 'none';
            this.changeDetectorRef.detectChanges();
        });
    }

    ngOnDestroy(): void  {
        this.loadingScreenSubscription.unsubscribe();
    }
}
