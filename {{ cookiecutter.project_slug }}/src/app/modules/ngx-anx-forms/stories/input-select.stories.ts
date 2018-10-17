import { storiesOf } from '@storybook/angular';
import { withKnobs, boolean} from '@storybook/addon-knobs/angular';

import { NG_SELECT_DEFAULT_CONFIG, NgSelectModule } from '@ng-select/ng-select';

import { InputComponent } from '../components/input/input.component';
import { InputErrorComponent } from '../components/input-error/input-error.component';
import { InputSelectComponent } from '../components/input-select/input-select.component';
import { DefaultErrorMessageService, ErrorMessageService } from 'ngx-anx-forms/services/error-message.service';

const
    metaData = {
        moduleMetadata: {
            imports: [
                NgSelectModule,
            ],
            providers: [
                {
                    provide: NG_SELECT_DEFAULT_CONFIG,
                    useValue: {
                        notFoundText: '-'
                    }
                },
                {
                    provide: ErrorMessageService,
                    useClass: DefaultErrorMessageService
                },
            ],
            declarations: [
                InputComponent,
                InputSelectComponent,
                InputErrorComponent,
            ]
        },
        template: `
            <anx-forms-input-select
                [bindLabel]="'text'"
                [bindValue]="'pk'"
                [multiple]="multiple"
                [options]="options"
                [placeholder]="placeholder"
                [(ngModel)]="selected"
                [errors]="errors"
                [errorMessages]="errorMessages"
                [readonly]="readonly"
            ></anx-forms-input-select>
            <hr>
            <div>Value: {{ selected | json }}</div>
        `,
    },
    options = [
        {text: 'Option 1', pk: 1},
        {text: 'Option 2', pk: 2},
        {text: 'Option 3', pk: 3},
    ];


storiesOf('NGX Forms|Input select', module)
    .addDecorator(withKnobs)

    .add('simple', () => ({
        ...metaData,
        props: {
            options: options,
            placeholder: 'Click to select...',
            selected: 1,
        },
        propsBinding: {}
    }))

    .add('multiple', () => ({
        ...metaData,
        props: {
            options: options,
            placeholder: 'Click to select...',
            selected: [1],
            multiple: true,
        },
        propsBinding: {}
    }))

    .add('simple with knobs', () => {
        const
            readonly = boolean('readonly', false);

        return {
            ...metaData,
            props: {
                options: options,
                placeholder: 'Click to select...',
                selected: 1,
                readonly: readonly,
            },
            propsBinding: {}
        };
    })

    .add('multiple with knobs', () => {
        const
            readonly = boolean('readonly', false);

        return {
            ...metaData,
            props: {
                options: options,
                placeholder: 'Click to select...',
                selected: [1],
                readonly: readonly,
                multiple: true,
            },
            propsBinding: {}
        };
    })

    .add('with errors', () => ({
        ...metaData,
        props: {
            options: options,
            placeholder: 'Click to select...',
            selected: [],
            errors: {
                'required': true,
                'other': true,
            },
        },
    }))
    .add('with custom errors', () => ({
        ...metaData,
        props: {
            options: options,
            placeholder: 'Click to select...',
            selected: [],
            errors: {
                'required': true,
                'error1': true,
                'error2': true,
                'other': true,
            },
            errorMessages: {
                'required': 'Custom required error message',
                'error1': 'Custom error 1',
                'error2': 'Custom error 2',
                'error3': 'Custom error 3',
            }
        },
    }))
;
