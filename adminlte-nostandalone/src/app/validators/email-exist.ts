import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { AuthService } from '../Services/auth-service';
import { catchError, debounceTime, distinctUntilChanged, map, of, switchMap } from 'rxjs';
export function emailExistsValidator(authService: AuthService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    if (!control.value) {
      return of(null);
    }
    return of(control.value).pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((email) => {
        let formData = { emailId: email };
        return authService.checkEmail(formData);
      }),
      map((response: any) => {
       if(response.status===400){
        return { emailExists: true };
       }else{
        return null;
       }
      }),
      catchError((error) => {
        console.log('ERROR RESPONSE:', error);
        if (error.status === 400) {
          return of({ emailExists: true });
        }
        return of(null);
      })
    );
  };
}
