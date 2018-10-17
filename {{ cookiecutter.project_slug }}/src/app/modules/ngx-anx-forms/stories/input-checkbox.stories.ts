import { storiesOf } from '@storybook/angular';
import {
    withKnobs,
    boolean,
} from '@storybook/addon-knobs/angular';

import { InputComponent } from "../components/input/input.component";
import { InputErrorComponent } from "../components/input-error/input-error.component";
import { InputCheckboxComponent } from "../components/input-checkbox/input-checkbox.component";
import { DefaultErrorMessageService, ErrorMessageService } from 'ngx-anx-forms/services/error-message.service';


const metaData = {
    moduleMetadata: {
        declarations: [
            InputComponent,
            InputCheckboxComponent,
            InputErrorComponent,
        ],
        providers: [
            {
                provide: ErrorMessageService,
                useClass: DefaultErrorMessageService
            },
        ]
    }
};

storiesOf('NGX Forms|Input checkbox', module)
    .addDecorator(withKnobs)

    .add('default', () => ({
        ...metaData,
        template: '<anx-forms-input-checkbox></anx-forms-input-checkbox>',
    }))

    .add('with knobs', () => {
        const
            readonly = boolean('readonly', false);

        return {
            ...metaData,
            template: `
                <anx-forms-input-checkbox label="Element 1" [(ngModel)]="value1" [readonly]="readonly"></anx-forms-input-checkbox>
                <div>Value: {{ value1 }}</div>
                <hr>
                <anx-forms-input-checkbox label="Element 2" [(ngModel)]="value2" [readonly]="readonly"></anx-forms-input-checkbox>
                <div>Value: {{ value2 }}</div>
            `,
            props: {
                value1: false,
                value2: true,
                readonly: readonly,
            }
        }
    })

    .add('with errors', () => ({
        ...metaData,
        template: `<anx-forms-input-checkbox label="Checkbox with errors" [errors]="errors"></anx-forms-input-checkbox>`,
        props: {
            type: 'text',
            placeholder: 'Errors after touch',
            errors: {
                'required': true,
                'other': true,
            },
        },
    }))
    .add('with custom errors', () => ({
        ...metaData,
        template: '<anx-forms-input-checkbox label="Checkbox with custom error messages" [errors]="errors" [errorMessages]="errorMessages"></anx-forms-input-checkbox>',
        props: {
            type: 'text',
            placeholder: 'Errors after touch',
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
        },
    }))
;
