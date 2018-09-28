import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { InputComponent } from '../input/input.component';

@Component({
    selector: 'anx-forms-input-likert-scale',
    templateUrl: './input-likert-scale.component.html',
    styleUrls: [
        './input-likert-scale.component.scss',
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputLikertScaleComponent),
            multi: true,
        },
    ],
})
export class InputLikertScaleComponent extends InputComponent {
    @Input() public minAnswer: number = 1;
    @Input() public maxAnswer: number = 5;
    @Input() public minAnswerInfo: string;
    @Input() public maxAnswerInfo: string;

    counter = Array;
}
