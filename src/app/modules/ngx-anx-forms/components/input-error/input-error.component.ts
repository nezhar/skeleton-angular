import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';


export const SERVER_ERROR_KEY = 'serverErrors';

@Component({
    selector: 'anx-forms-input-error',
    templateUrl: './input-error.component.html',
    styleUrls: [
        './input-error.component.scss',
    ]
})
export class InputErrorComponent implements OnChanges {

    @Input() public errors: ValidationErrors;
    @Input() public errorMessages: Object = {};

    errorsToDisplay: string[] = [];

    ngOnChanges(changes: SimpleChanges) {
        if (changes['errors']) {
            this.errorsToDisplay = this.getErrorMessages();
        }
    }

    getErrorMessages(): Array<string> {
        const errorMessages = [];

        if (this.errors) {
            Object.keys(this.errors).forEach(key => {
                // Add errors from the REST API directly into the error message list
                if (key === SERVER_ERROR_KEY) {
                    errorMessages.push(...this.errors[SERVER_ERROR_KEY]);
                } else {
                    errorMessages.push(this.getErrorMessage(key));
                }
            });
        }

        return errorMessages;
    }

    getErrorMessage(type: string) {
        // Display message passed via property binding
        if (this.errorMessages && this.errorMessages[type]) {
            return this.errorMessages[type];
        }

        // Display component default message
        switch (type) {
            case 'required': {
                return 'This field is required';
            }

            case 'email': {
                return 'Please insert a valid email';
            }

            case 'min': {
                return 'Please insert a higher value';
            }

            case 'max': {
                return 'Please insert a lower value';
            }

            default: {
                return 'Unknown error: ' + type;
            }
        }
    }
}
