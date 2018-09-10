import { Component, forwardRef, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';


@Component ({
    selector: 'app-icon-input',
    templateUrl: './icon-input.component.html',
    styleUrls: ['./icon-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => IconInputComponent),
            multi: true,
        },
    ],
})
export class IconInputComponent extends InputComponent {
    @Input() title: string = '';
    @Input() type: string = 'text';
    @Input() placeholder: string = '';
    @Input() errors: Array<string> = [];
    @Input() icon: string = 'fa fa-font';

}
