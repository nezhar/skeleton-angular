import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import {
    withKnobs,
    boolean,
    text,
} from '@storybook/addon-knobs/angular';

import { InputComponent } from '../components/input/input.component';
import { IconInputComponent } from '../components/icon-input/icon-input.component';
import { InputErrorComponent } from '../components/input-error/input-error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faLock, faUser, faMeh } from '@fortawesome/free-solid-svg-icons';
import { DefaultErrorMessageService, ErrorMessageService } from 'ngx-anx-forms/services/error-message.service';

// icons to be used in components
library.add(
    faLock,
    faUser,
    faMeh,
);


const metaData = {
    moduleMetadata: {
        imports: [
            FontAwesomeModule,
        ],
        declarations: [
            InputComponent,
            IconInputComponent,
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

const template = {
    template: `
        <anx-forms-icon-input
            [type]="type"
            [placeholder]="placeholder"
            [readonly]="readonly"
            [errors]="errors"
            [errorMessages]="errorMessages"
            [floatingPlaceholder]="floatingPlaceholder"
            [(ngModel)]="value"
        >
            <fa-icon [icon]="icon"></fa-icon>
        </anx-forms-icon-input>
    `,
};

storiesOf('NGX Forms|Icon input', module)
    .addDecorator(withKnobs)

    .add('default', () => ({
        ...metaData,
        template: '<anx-forms-icon-input></anx-forms-icon-input>'
    }))
    .add('username', withNotes('This story uses knobs.')(() => {
        const
            value = text('value', 'Input text'),
            readonly = boolean('readonly', false),
            floatingPlaceholder = boolean('floatingPlaceholder', false);

        return {
            ...metaData,
            ...template,
            props: {
                type: 'text',
                placeholder: 'username',
                icon: ['fas', 'user'],
                value: value,
                readonly: readonly,
                floatingPlaceholder: floatingPlaceholder,
            },
        };
    }))
    .add('password', withNotes('This story uses knobs.')(() => {
        const
            value = text('value', 'Input text'),
            readonly = boolean('readonly', false),
            floatingPlaceholder = boolean('floatingPlaceholder', false);

        return {
            ...metaData,
            ...template,
            props: {
                type: 'password',
                placeholder: 'Password',
                icon: ['fas', 'lock'],
                value: value,
                readonly: readonly,
                floatingPlaceholder: floatingPlaceholder,
            }
        };
    }))
    .add('with errors', () => ({
        ...metaData,
        ...template,
        props: {
            type: 'text',
            placeholder: 'Errors after touch',
            icon: ['fas', 'meh'],
            errors: {
                'required': true,
                'other': true,
            },
        },
    }))
    .add('with custom errors', () => ({
        ...metaData,
        ...template,
        props: {
            type: 'text',
            placeholder: 'Custom errors after touch',
            icon: ['fas', 'meh'],
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
