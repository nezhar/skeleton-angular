import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import {
    withKnobs,
    number,
    text,
    boolean,
} from '@storybook/addon-knobs/angular';

import { InputComponent } from '../components/input/input.component';
import { InputErrorComponent } from '../components/input-error/input-error.component';
import { InputLikertScaleComponent } from '../components/input-likert-scale/input-likert-scale.component';
import { InputRadioComponent } from '../components/input-radio/input-radio.component';

const metaData = {
    moduleMetadata: {
        declarations: [
            InputComponent,
            InputRadioComponent,
            InputLikertScaleComponent,
            InputErrorComponent,
        ]
    }
};

storiesOf('NGX Forms|Input likert scale', module)
    .addDecorator(withKnobs)

    .add('default', () => ({
        ...metaData,
        template: `<anx-forms-input-likert-scale></anx-forms-input-likert-scale>`,
    }))

    .add('with knob', withNotes('This story uses knobs.')(() => {
        const readonly = boolean('readonly', false);
        const minAnswer = number('minAnswer', 0);
        const maxAnswer = number('maxAnswer', 5);
        const minAnswerInfo = text('minAnswerInfo', 'min');
        const maxAnswerInfo = text('maxAnswerInfo', 'max');

        return {
            ...metaData,
            template: `<anx-forms-input-likert-scale
                            [minAnswer]="minAnswer"
                            [maxAnswer]="maxAnswer"
                            [minAnswerInfo]="minAnswerInfo"
                            [maxAnswerInfo]="maxAnswerInfo"
                            [readonly]="readonly"
                            [(ngModel)]="value"
                       ></anx-forms-input-likert-scale>
                       <div>Value {{ value }}</div>`,
            props: {
                minAnswer: minAnswer,
                maxAnswer: maxAnswer,
                minAnswerInfo: minAnswerInfo,
                maxAnswerInfo: maxAnswerInfo,
                readonly: readonly,
            }
        };
    }))

    .add('with errors', () => ({
        ...metaData,
        template: `<anx-forms-input-likert-scale
                        label="Checkbox with errors"
                        [errors]="errors"
                   ></anx-forms-input-likert-scale>`,
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
        template: `<anx-forms-input-likert-scale
                        label="Checkbox with custom error messages"
                        [errors]="errors"
                        [errorMessages]="errorMessages"
                   ></anx-forms-input-likert-scale>`,
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
                'error1': 'Custom error 1',
                'error2': 'Custom error 2',
                'error3': 'Custom error 3',
            }
        },
    }))
;
