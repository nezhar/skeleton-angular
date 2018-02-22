import {storiesOf} from '@storybook/angular';
import {action} from '@storybook/addon-actions';

import {InputComponent} from '../../app/components/input/input.component';


storiesOf('Input', module)
    .add('default', () => ({
        component: InputComponent,
    }))
    .add('text', () => ({
        component: InputComponent,
        props: {
            type: 'text',
            placeholder: 'Text',
        },
    }))
    .add('password', () => ({
        component: InputComponent,
        props: {
            type: 'password',
            placeholder: 'Password',
        },
    }))
    .add('with error', () => ({
        component: InputComponent,
        props: {
            type: 'text',
            placeholder: 'Field with errors',
            errors: ['Error 1', 'Error 2' ]
        },
    }));
