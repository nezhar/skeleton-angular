import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { InputComponent } from '../input/input.component';


@Component({
    selector: 'anx-forms-input-checkbox',
    templateUrl: './input-checkbox.component.html',
    styleUrls: [
        './input-checkbox.component.scss',
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputCheckboxComponent),
            multi: true,
        },
    ],
})
export class InputCheckboxComponent extends InputComponent {
    @Input() public label: string = '';
}
