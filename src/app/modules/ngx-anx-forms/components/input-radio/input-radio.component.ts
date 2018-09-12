import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { InputCheckboxComponent } from '../input-checkbox/input-checkbox.component';

@Component({
    selector: 'anx-forms-input-radio',
    templateUrl: './input-radio.component.html',
    styleUrls: [
        './input-radio.component.scss',
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputRadioComponent),
            multi: true,
        },
    ],
})
export class InputRadioComponent extends InputCheckboxComponent {
    @Input() public radioValue: string = '';
}
