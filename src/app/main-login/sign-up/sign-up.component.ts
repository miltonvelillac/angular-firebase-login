import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { tap, distinctUntilChanged } from 'rxjs/operators';

import { requiredFieldMessage, wrongEmailMessage, wrongPasswordMessage, wrongRepeatPasswordMessage } from 'src/app/shared/utils/constants';
import { FormsValidationsService } from 'src/app/shared/utils/forms-validations/forms-validations.service';
import { passwordRegex } from 'src/app/shared/utils/regex';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {

  form: FormGroup = this.createForm();

  uiMessages = {
    requieredField: requiredFieldMessage,
    wrongEmail: wrongEmailMessage,
    wrongPasswor: wrongPasswordMessage,
    wrongRepeatPassword: wrongRepeatPasswordMessage
  }

  constructor(
    private fb: FormBuilder,
    private formsValidationsService: FormsValidationsService
  ) { }

  ngOnInit(): void {
    this.setExtraFormValidations();
    this.updatePassword();
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]],
      passwordRepeat: ['']
    });
  }

  setExtraFormValidations(): void {
    this.form.controls.passwordRepeat.setValidators(
      [Validators.required, Validators.pattern(passwordRegex), this.formsValidationsService.validateRepeatPassword(this.form?.controls[`password`])]
    );
    this.repeatPasswordUpdateValidity();
  }
  
  repeatPasswordUpdateValidity(): void {
    this.form.controls.passwordRepeat.updateValueAndValidity();
  }

  updatePassword(): void {
    this.form.controls.password.valueChanges.pipe(
      distinctUntilChanged(),
      tap(() => this.repeatPasswordUpdateValidity())
    ).subscribe();
  }

  signUp(): void {
    
  }

  getRepeatPasswordErrorMessage(): string | undefined {
    if (this.form?.get('passwordRepeat')?.errors?.pattern || this.form?.get('passwordRepeat')?.errors?.required) {
      return this.uiMessages.wrongPasswor;
    } else if(this.form?.get('passwordRepeat')?.errors?.invalidRepeatPassword) {
      return this.uiMessages.wrongRepeatPassword;
    }
    return undefined
  }

}
