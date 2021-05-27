import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import firebase from 'firebase/app';
import { tap, distinctUntilChanged } from 'rxjs/operators';
import { SessionUserService } from 'src/app/shared/services/session-user/session-user.service';

import { requiredFieldMessage, wrongEmailMessage, wrongPasswordMessage, wrongRepeatPasswordMessage, wrongNameLengthMessage } from 'src/app/shared/utils/constants';
import { FormsValidationsService } from 'src/app/shared/utils/forms-validations/forms-validations.service';
import { passwordRegex } from 'src/app/shared/utils/regex';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {
  
  maxNameCharacters = 50;
  form: FormGroup = this.createForm();

  uiMessages = {
    requieredField: requiredFieldMessage,
    wrongEmail: wrongEmailMessage,
    wrongPasswor: wrongPasswordMessage,
    wrongRepeatPassword: wrongRepeatPasswordMessage,
    wrongNameLength: wrongNameLengthMessage
  };

  signUpLoading = false;
  errorSignUpMessage: string | undefined;


  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private formsValidationsService: FormsValidationsService,
    private sessionUserService: SessionUserService
  ) { }

  ngOnInit(): void {
    this.setExtraFormValidations();
    this.updatePassword();
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(this.maxNameCharacters)]],
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
    this.errorSignUpMessage = undefined;

    if (!this.form.valid) { return; }

    this.signUpLoading = true;
    const { email, password } = this.form.getRawValue();
    this.singUpEmailHandle(email, password)
  }
  
  async singUpEmailHandle(email: string, password: string): Promise<void> {
    try {
      const userCredentials: firebase.auth.UserCredential = await this.sessionUserService.signUpEmail(email, password);
      console.log('signUp sucess', userCredentials);
    } catch (error) {
      console.log('Error..................', error);
      this.errorSignUpMessage = error.message;
    } finally {
      this.signUpLoading = false;
      this.cdr.detectChanges();
    }
  }

  async signUpGoogle(): Promise<void> {
    try {
      const userCredentials: firebase.auth.UserCredential = await this.sessionUserService.signInOrSignUpGoogle();
      console.log('signIp Google sucess', userCredentials);
    } catch (error) {
      console.log('Error Gooogle..................', error);
    }
  }

  getRepeatPasswordErrorMessage(): string | undefined {
    if (this.form?.get('passwordRepeat')?.errors?.pattern || this.form?.get('passwordRepeat')?.errors?.required) {
      return this.uiMessages.wrongPasswor;
    } else if(this.form?.get('passwordRepeat')?.errors?.invalidRepeatPassword) {
      return this.uiMessages.wrongRepeatPassword;
    }
    return undefined
  }

  getNameErrorMessage(): string | undefined {
    if (this.form?.get('name')?.errors?.required) {
      return this.uiMessages.requieredField;
    } else if(this.form?.get('name')?.errors?.maxlength) {
      return this.uiMessages.wrongNameLength.replace('{charactersNumber}', `${this.maxNameCharacters}`);      
    }
    return undefined
  }

  getEmailErrorMessage(): string | undefined {
    if (this.form?.controls.email?.errors?.required) {
      return this.uiMessages.requieredField;
    } else if(this.form?.controls.email?.errors?.email) {
      return this.uiMessages.wrongEmail;      
    }
    return undefined
  }

}
