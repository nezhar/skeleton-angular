import {Component, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";

import {NgbMomentpickerAccessor} from "./ngb-momentpicker-accessor";


@Component({
    selector: 'ngb-momentpicker',
    templateUrl: './ngb-momentpicker.component.html',
    styleUrls: [
        './ngb-momentpicker.component.scss'
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: NgbMomentpickerComponent,
            multi: true,
        },
    ],
})
export class NgbMomentpickerComponent extends NgbMomentpickerAccessor implements OnInit {
    constructor() {
        super();
    }

    ngOnInit() {
        console.log('Build component initialised');
    }
}