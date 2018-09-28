import { ReactiveFormsModule } from '@angular/forms';
import { storiesOf } from '@storybook/angular';
import {
    withKnobs,
    boolean,
} from '@storybook/addon-knobs/angular';

import { NG_SELECT_DEFAULT_CONFIG, NgSelectModule } from '@ng-select/ng-select';

import { InputComponent } from "../components/input/input.component";
import { InputErrorComponent } from "../components/input-error/input-error.component";
import { InputDistributedMultipleChoiceComponent } from "../components/input-distributed-multiple-choice/input-distributed-multiple-choice.component";
import { InputSelectComponent } from "../components/input-select/input-select.component";


const metaData = {
    moduleMetadata: {
        imports: [
            ReactiveFormsModule,
            NgSelectModule,
        ],
        providers: [
            {
                provide: NG_SELECT_DEFAULT_CONFIG,
                useValue: {
                    notFoundText: '-'
                }
            }
        ],
        declarations: [
            InputComponent,
            InputErrorComponent,
            InputSelectComponent,
            InputDistributedMultipleChoiceComponent,
            InputErrorComponent,
        ]
    },
    template: `<anx-forms-input-distributed-multiple-choice
                     [weightingTypes]="weightingTypes"
                     [bindLabel]="'label'"
                     [bindValue]="'pk'"
                     [options]="options"
                     [placeholder]="placeholder"
                     [readonly]="readonly"
                     [(ngModel)]="value"
                     [initialValue]="initialValue"
                     [errors]="errors"
                     [errorMessages]="errorMessages"
               ></anx-forms-input-distributed-multiple-choice> 
               <hr>
               <div>Value: <pre>{{ value | json }}</pre></div>`
};

const defaultProps = {
    weightingTypes: [
        {key: 'PREFERRED', label: 'Preferred'},
        {key: 'MANAGEABLE', label: 'Manageable'},
        {key: 'IMPOSSIBLE', label: 'Impossible'},
    ],
    config: {labelField: 'label', valueField: 'pk'},
    options: [
        {label: 'Option 1', pk: 1},
        {label: 'Option 2', pk: 2},
        {label: 'Option 3', pk: 3},
        {label: 'Option 4', pk: 4},
        {label: 'Option 5', pk: 5},
        {label: 'Option 6', pk: 6},
        {label: 'Option 7', pk: 7},
        {label: 'Option 8', pk: 8},
        {label: 'Option 9', pk: 9},
    ],
    placeholder: 'Click to select...',
};

storiesOf('NGX Forms|Input distributed multiple choice', module)
    .addDecorator(withKnobs)

    .add('default', () => ({
        ...metaData,
        props: {
            ...defaultProps,
        }
    }))

    .add('initial value', () => ({
        ...metaData,
        props: {
            ...defaultProps,
            initialValue: {
                "PREFERRED": [1],
                "MANAGEABLE": [2, 3],
                "IMPOSSIBLE": []
            }
        }
    }))

    .add('with knobs', () => {
        const readonly = boolean('readonly', false);

        return {
            ...metaData,
            props: {
                ...defaultProps,
                readonly: readonly,
            }
        }
    })

    .add('with errors', () => ({
        ...metaData,
        props: {
            ...defaultProps,
            errors: {
                'required': true,
                'other': true,
            },
        }
    }))

    .add('with custom errors', () => ({
        ...metaData,
        props: {
            ...defaultProps,
            errors: {
                'required': true,
                'error1': true,
                'error2': true,
                'other': true,
            },
            errorMessages: {
                'required': 'Custom required error message',
                'error1': "Custom error 1",
                'error2': "Custom error 2",
                'error3': "Custom error 3",
            }
        }
    }))

;
