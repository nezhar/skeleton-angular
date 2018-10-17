import { Component, Input, forwardRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgModel, ValidationErrors } from '@angular/forms';

import { SERVER_ERROR_KEY } from '../input-error/input-error.component';
import { NgModelValueAccessor } from '../../utils/ng-model-value-accessor';


@Component({
    selector: 'anx-forms-input',
    templateUrl: './input.component.html',
    styleUrls: [
        './input.component.scss'
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
    ]
})
export class InputComponent extends NgModelValueAccessor {
    @Input() public id: string = '';
    @Input() public name: string = '';
    @Input() public title: string = '';
    @Input() public type: string = 'text';
    @Input() public placeholder: string = '';
    @Input() public readonly: boolean = false;
    @Input() public floatingPlaceholder: boolean = false;
    @Input() public min: number;
    @Input() public max: number;
    @Input() public step: number;
    @Input() public errorMessages: Object = {};
    @Input() public errors: ValidationErrors;

    @ViewChild('inputField') inputField: NgModel;

    constructor() {
        super();
    }

    displayErrors(): boolean {
        return !!this.errors && (this.inputField.touched || this.errors[SERVER_ERROR_KEY]);
    }
}
