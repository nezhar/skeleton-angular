import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NG_SELECT_DEFAULT_CONFIG, NgSelectModule } from '@ng-select/ng-select';

import { InputComponent } from './components/input/input.component';
import { IconInputComponent } from './components/icon-input/icon-input.component';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { InputLikertScaleComponent } from './components/input-likert-scale/input-likert-scale.component';
import { InputTextareaComponent } from './components/input-textarea/input-textarea.component';
import { InputRadioComponent } from './components/input-radio/input-radio.component';
import {
    InputDistributedMultipleChoiceComponent
} from './components/input-distributed-multiple-choice/input-distributed-multiple-choice.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
    ],
    exports: [
        InputErrorComponent,
        InputComponent,
        IconInputComponent,
        InputCheckboxComponent,
        InputSelectComponent,
        InputLikertScaleComponent,
        InputTextareaComponent,
        InputRadioComponent,
        InputDistributedMultipleChoiceComponent,
    ],
    declarations: [
        InputErrorComponent,
        InputComponent,
        IconInputComponent,
        InputCheckboxComponent,
        InputSelectComponent,
        InputLikertScaleComponent,
        InputTextareaComponent,
        InputRadioComponent,
        InputDistributedMultipleChoiceComponent,
    ],
    providers: [
        {
            provide: NG_SELECT_DEFAULT_CONFIG,
            useValue: {
                notFoundText: '-'
            }
        }
    ],
})
export class NgxAnxFormsModule {

}
