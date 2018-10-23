import { Component, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';

import { NgSelectConfig } from '@ng-select/ng-select';

import { InputComponent } from '../input/input.component';


@Component({
    selector: 'anx-forms-input-select',
    templateUrl: './input-select.component.html',
    styleUrls: [
        './input-select.component.scss',
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputSelectComponent),
            multi: true,
        },
    ],
})
export class InputSelectComponent extends InputComponent {

    @Input() options: {}[];
    @Input() bindLabel: string;
    @Input() bindValue: string;
    @Input() placeholder: string = '';
    @Input() multiple: boolean = false;
    @Input() closeOnSelect: boolean = true;
    @Input() notFoundText: string = '-';

    @ViewChild('inputField') inputField: NgModel;

    constructor(private config: NgSelectConfig) {
        super();
        this.config.notFoundText = '-';
    }

}
