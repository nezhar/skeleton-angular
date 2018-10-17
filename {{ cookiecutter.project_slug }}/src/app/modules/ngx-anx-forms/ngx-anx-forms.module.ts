import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule, Provider } from '@angular/core';
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
import { DefaultErrorMessageService, ErrorMessageService } from 'ngx-anx-forms/services/error-message.service';


export interface NgxAnxFormsConfig {
  errorMessageService?: Provider;
}


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
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NgxAnxFormsModule {
    static forRoot(config: NgxAnxFormsConfig = {}): ModuleWithProviders {
        return {
            ngModule: NgxAnxFormsModule,
            providers: [
                config.errorMessageService || {provide: ErrorMessageService, useClass: DefaultErrorMessageService},
            ]
        };
    }
}
