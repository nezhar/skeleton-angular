import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import {
    withKnobs,
    boolean,
} from '@storybook/addon-knobs/angular';

import { InputComponent } from '../components/input/input.component';
import { InputErrorComponent } from '../components/input-error/input-error.component';

const metaData = {
    moduleMetadata: {
        declarations: [
            InputComponent,
            InputErrorComponent,
        ],
    }
};

const template = {
    template: `
        <anx-forms-input
            [type]="type"
            [placeholder]="placeholder"
            [readonly]="readonly"
            [errors]="errors"
            [errorMessages]="errorMessages"
            [(ngModel)]="asd"
        ></anx-forms-input>
    `,
};

storiesOf('NGX Forms|Simple input', module)
    .addDecorator(withKnobs)

    .add('default', () => ({
        ...metaData,
        template: '<anx-forms-input></anx-forms-input>',
    }))
    .add(
        'text',
        withNotes('This story uses knobs.')(() => {
            const
                readonly = boolean('readonly', false);

            return {
                ...metaData,
                ...template,
                props: {
                    type: 'text',
                    placeholder: 'Text',
                    readonly: readonly,
                },
            };
        })
    )
    .add(
        'password',
        withNotes('This story uses knobs.')(() => {
            const
                readonly = boolean('readonly', false);

            return {
                ...metaData,
                ...template,
                props: {
                    type: 'password',
                    placeholder: 'Password',
                    readonly: readonly,
                },
            };
        })
    )
    .add(
        'number',
        withNotes('This story uses knobs.')(() => {
            const
                readonly = boolean('readonly', false);

            return {
                ...metaData,
                ...template,
                props: {
                    type: 'number',
                    placeholder: '10',
                    readonly: readonly,
                },
            };
        })
    )
    .add('with errors', withNotes('Errors will be displayed after the user touches the input.')(() => ({
        ...metaData,
        ...template,
        props: {
            type: 'text',
            placeholder: 'Errors after touch',
            errors: {
                'required': true,
                'other': true,
            },
        },
    })))
    .add('with custom errors', withNotes('Errors will be displayed after the user touches the input.')(() => ({
        ...metaData,
        ...template,
        props: {
            type: 'text',
            placeholder: 'Custom errors after touch',
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
    })))
;
