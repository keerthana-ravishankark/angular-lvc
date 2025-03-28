import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function customNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (value && value <= 10) {
            return { 'customNumberInvalid': true };
        }
        return null;
    };
}