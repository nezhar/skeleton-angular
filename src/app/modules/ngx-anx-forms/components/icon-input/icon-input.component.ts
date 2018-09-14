import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { InputComponent } from '../input/input.component';


@Component({
    selector: 'anx-forms-icon-input',
    templateUrl: './icon-input.component.html',
    styleUrls: [
        './icon-input.component.scss'
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => IconInputComponent),
            multi: true,
        },
    ],
})
export class IconInputComponent extends InputComponent {
}
