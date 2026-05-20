import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailFormatValidator(): ValidatorFn {
  return (
    control: AbstractControl
  ): ValidationErrors | null => {
    const email = control.value;
    console.log('Current Value:', email);
    if (!email) {
      console.log('Returning NULL');
      return null;
    }
    const regex =
      /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const valid = regex.test(email);
    const result = valid
      ? null
      : { invalidEmailFormat: true };
    console.log('Validator Returning:', result);
    return result;

  };
}
