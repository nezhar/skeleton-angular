import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    Input,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from '../input/input.component';


@Component({
    selector: 'anx-forms-input-distributed-multiple-choice',
    templateUrl: './input-distributed-multiple-choice.component.html',
    styleUrls: [
        './input-distributed-multiple-choice.component.scss',
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputDistributedMultipleChoiceComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDistributedMultipleChoiceComponent extends InputComponent implements OnDestroy, OnInit {

    inputFormSubscription: Subscription = null;

    inputForm: FormGroup = new FormGroup({});
    answerOptions = {};

    @Input() options: {}[];
    @Input() bindLabel: string;
    @Input() bindValue: string;
    @Input() weightingTypes: {key: string, label: string}[] = [];
    @Input() initialValue: {}[] = [];

    ngOnInit() {
        for (const weightingType of this.weightingTypes) {
            this.inputForm.addControl(
                weightingType.key,
                new FormControl(null, null, null)
            );

            // Set initial value
            if (this.initialValue && this.initialValue[weightingType.key]) {
                this.inputForm.get(weightingType.key).setValue(this.initialValue[weightingType.key]);
            }
        }

        // Update question answers for existing answers
        this.updateQuestionAnswerOptions();

        // Subscribe to form changes to update ngModel
        this.inputFormSubscription = this.inputForm.valueChanges.subscribe(value => {
            this.updateQuestionAnswerOptions();
            this.triggerOnChange(value);
        });
    }

    getRatingAnswerOptions(ratingType: string) {
        return this.options.slice().filter(answer_option => {
            let valid = true;

            for (const weightingType of this.weightingTypes) {
                if (weightingType.key !== ratingType) {
                    const weightingTypeValue = this.inputForm.get(weightingType.key).value;

                    if (weightingTypeValue) {
                        valid = valid && weightingTypeValue.indexOf(answer_option[this.bindValue]) === -1;
                    }
                }
            }

            return valid;
        });
    }

    updateQuestionAnswerOptions() {
        for (const weightingType of this.weightingTypes) {
            this.answerOptions[weightingType.key] = this.getRatingAnswerOptions(weightingType.key);
        }
    }

    displayErrors(): boolean {
        return !!this.errors;
    }

    ngOnDestroy() {
        this.inputFormSubscription.unsubscribe();
    }
}
