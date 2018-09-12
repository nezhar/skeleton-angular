import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';

import { InputErrorComponent } from '../components/input-error/input-error.component';


const metaData = {
    moduleMetadata: {
        declarations: [
            InputErrorComponent,
        ]
    }
};

storiesOf('NGX Forms|Input error', module)
    .add('default', withNotes('The input error component is blank by default')(() => ({
        ...metaData,
        template: '<anx-forms-input-error></anx-forms-input-error>',
    })))

    .add('errors', () => ({
        ...metaData,
        template: `<anx-forms-input-error [errors]="errors"></anx-forms-input-error>`,
        props: {
            errors: {
                'required': true,
                'other': true,
            },
        },
    }))
    .add('custom errors', () => ({
        ...metaData,
        template: '<anx-forms-input-error [errors]="errors" [errorMessages]="errorMessages"></anx-forms-input-error>',
        props: {
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
