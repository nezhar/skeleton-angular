import { Injectable } from '@angular/core';

export abstract class ErrorMessageService {
    /**
     * A function that handles error messages.
     */
    abstract handle(type: string): string;
}

/**
 * Default error messages
 */
@Injectable()
export class DefaultErrorMessageService implements ErrorMessageService {
    handle(type: string): string {
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
