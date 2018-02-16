import {Component, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";

import {NgbMomentpickerAccessor} from "./ngb-momentpicker-accessor";


@Component({
    selector: 'ngb-momentpicker',
    template: require('./ngb-momentpicker.component.html'),
    styles: [
        require('./ngb-momentpicker.component.scss'),
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