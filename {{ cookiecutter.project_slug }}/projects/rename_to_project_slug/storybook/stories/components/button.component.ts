import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { withNotes } from '@storybook/addon-notes';
import {
    withKnobs,
    boolean,
    text,
    select,
} from '@storybook/addon-knobs/angular';
import { ButtonComponent } from '../../../app/components/button/button.component';


const moduleMetadata = {
    moduleMetadata: {
        declarations: [ButtonComponent],
    }
};
const template = {
    template: `
        <app-button
            [role]="role"
            [size]="size"
            [disabled]="disabled"
            [fluid]="fluid"
            [outline]="outline"
            (click)="onClick($event)"
        >{{ content }}</app-button>
    `,
};

storiesOf('Components|Button', module)
    .addDecorator(withKnobs)

    .add('default', () => ({
        ...moduleMetadata,
        ...template,
        props: {
            content: 'Default',
            onClick: action('Button click'),
        }
    }))

    .add('with knobs',
        withNotes('This story uses knobs to configure all possible options of how a button can be displayed.')(() => {
            const
                roles = {
                    default: 'default',
                    primary: 'primary',
                    secondary: 'secondary',
                    danger: 'danger',
                    success: 'success',
                    warning: 'warning',
                    info: 'info',
                    light: 'light',
                    dark: 'dark',
                    link: 'link',
                },
                sizes = {
                    sm: 'sm',
                    md: 'md',
                    lg: 'lg',
                },
                disabled = boolean('disabled', false),
                outline = boolean('outline', false),
                fluid = boolean('fluid', false),
                content = text('content', 'Button content'),
                role = select('role', roles, 'default'),
                size = select('size', sizes, 'md');

            return {
                ...moduleMetadata,
                ...template,
                props: {
                    content: content,
                    role: role,
                    disabled: disabled,
                    size: size,
                    fluid: fluid,
                    outline: outline,
                    onClick: action('Button click'),
                },
            };
        })
    )


;
