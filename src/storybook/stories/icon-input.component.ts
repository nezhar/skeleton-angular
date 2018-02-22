import {storiesOf} from '@storybook/angular';
import {action} from '@storybook/addon-actions';

import {InputComponent} from '../../app/components/input/input.component';
import {IconInputComponent} from "../../app/components/icon-input/icon-input.component";


const metaData = {
    moduleMetadata: {
        declarations: [
            InputComponent
        ]
    }
};

storiesOf('Icon input', module)
    .add('default', () => ({
        ...metaData,
        component: IconInputComponent
    }))
    .add('username', () => ({
        ...metaData,
        component: IconInputComponent,
        props: {
            type: 'text',
            placeholder: 'username',
            icon: 'fa fa-user',
        },
    }))
    .add('password', () => ({
        ...metaData,
        component: IconInputComponent,
        props: {
            type: 'password',
            placeholder: '********',
            icon: 'fa fa-lock',
        },
    }))
    .add('with error', () => ({
        ...metaData,
        component: IconInputComponent,
        props: {
            type: 'text',
            placeholder: 'Field with errors',
            icon: 'fa fa-meh-o',
            errors: ['Error 1', 'Error 2' ]
        },
    }));