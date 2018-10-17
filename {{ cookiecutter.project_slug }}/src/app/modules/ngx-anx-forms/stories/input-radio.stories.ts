import { storiesOf } from '@storybook/angular';
import {
    withKnobs,
    boolean,
} from '@storybook/addon-knobs/angular';

import { InputComponent } from '../components/input/input.component';
import { InputErrorComponent } from '../components/input-error/input-error.component';
import { InputRadioComponent } from '../components/input-radio/input-radio.component';
import { DefaultErrorMessageService, ErrorMessageService } from 'ngx-anx-forms/services/error-message.service';


const metaData = {
    moduleMetadata: {
        declarations: [
            InputComponent,
            InputRadioComponent,
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

storiesOf('NGX Forms|Input radio', module)
    .addDecorator(withKnobs)

    .add('default', () => ({
        ...metaData,
        template: '<anx-forms-input-radio></anx-forms-input-radio>',
    }))

    .add('with knobs', () => {
        const
            readonly = boolean('readonly', false);

        return {
            ...metaData,
            template: `
                <anx-forms-input-radio label="Element 1" [(ngModel)]="value" [radioValue]="1" [readonly]="readonly"></anx-forms-input-radio>
                <anx-forms-input-radio label="Element 2" [(ngModel)]="value" [radioValue]="2" [readonly]="readonly"></anx-forms-input-radio>
                <anx-forms-input-radio label="Element 3" [(ngModel)]="value" [radioValue]="3" [readonly]="readonly"></anx-forms-input-radio>
                <div>Value: {{ value }}</div>
            `,
            props: {
                value: 1,
                readonly: readonly,
            }
        };
    })
;
