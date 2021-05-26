import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsValidationsService {

  constructor() { }

  validateRepeatPassword(passwordFromControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const passwordRepeat = control.value;
      const password: string = passwordFromControl?.value;
      if (!passwordRepeat || password !== passwordRepeat) {
        return { invalidRepeatPassword: true };
    }
      return null;
    };
  }
}
