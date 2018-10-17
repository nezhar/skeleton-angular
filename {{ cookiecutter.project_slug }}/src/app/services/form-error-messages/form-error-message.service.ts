import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ErrorMessageService } from 'ngx-anx-forms/services/error-message.service';


@Injectable()
export class FormErrorMessageService implements ErrorMessageService {
    constructor(private translateService: TranslateService,) {
    }

    handle(type: string): string {
        // Display component default message
        switch (type) {
            case 'required': {
                return this.translateService.instant('This field is required');
            }

            case 'email': {
                return this.translateService.instant('Please insert a valid email');
            }

            case 'min': {
                return this.translateService.instant('Please insert a higher value');
            }

            case 'max': {
                return this.translateService.instant('Please insert a lower value');
            }

            default: {
                console.log('Unknown error: ' + type);
            }
        }
    }
}
