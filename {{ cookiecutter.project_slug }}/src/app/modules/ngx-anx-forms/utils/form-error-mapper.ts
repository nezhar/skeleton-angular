import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

function mapFormControlErrors(formControl: FormControl, apiErrors: string[]) {
    if (apiErrors && apiErrors.length) {
        formControl.setErrors({'serverErrors': apiErrors});
    }
}

function mapFormGroupErrors(formGroup: FormGroup, apiErrors: {}) {
    if (Object.keys(apiErrors).length) {
        Object.keys(formGroup.controls).forEach(controlName => {
            mapFormErrors(formGroup.get(controlName), apiErrors[controlName]);
        });
        formGroup.setErrors({'serverErrors': apiErrors});
    }
}

function mapFormArrayErrors(formArray: FormArray, apiErrors: {}[]) {
    if (apiErrors) {
        formArray.controls.forEach((formControl, index) => {
            mapFormErrors(formControl, apiErrors[index]);
        });
        formArray.setErrors({'serverErrors': apiErrors});
    }
}

/**
 * Set errors received from a REST API call to a Form
 *
 * @param {FormGroup} abstractControl
 * @param {any} apiErrors
 */
export function mapFormErrors(abstractControl: AbstractControl, apiErrors: any) {
    if (abstractControl instanceof FormGroup) {
        mapFormGroupErrors(abstractControl, apiErrors);
    } else if (abstractControl instanceof FormArray) {
        mapFormArrayErrors(abstractControl, apiErrors);
    } else if (abstractControl instanceof FormControl) {
        mapFormControlErrors(abstractControl, apiErrors);
    }
}
