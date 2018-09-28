import { Component, forwardRef } from '@angular/core';

import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from '../input/input.component';


@Component({
    selector: 'anx-forms-input-textarea',
    templateUrl: './input-textarea.component.html',
    styleUrls: [
        './input-textarea.component.scss',
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputTextareaComponent),
            multi: true,
        },
    ],
})
export class InputTextareaComponent extends InputComponent {
}
