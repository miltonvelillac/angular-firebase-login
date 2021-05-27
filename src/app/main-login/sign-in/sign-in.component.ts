import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import firebase from 'firebase/app';

import { SessionUserService } from 'src/app/shared/services/session-user/session-user.service';
import { requiredFieldMessage, wrongEmailMessage, wrongPasswordMessage } from 'src/app/shared/utils/constants';
import { passwordRegex } from 'src/app/shared/utils/regex';
import { PasswordResetService } from '../shared/services/passwrod-reset/password-reset.service';
import { SessionLogicService } from '../shared/session-logic/session-logic.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {

  form: FormGroup = this.createForm();

  uiMessages = {
    requieredField: requiredFieldMessage,
    wrongEmail: wrongEmailMessage,
    wrongPasswor: wrongPasswordMessage
  };

  signInLoading = false;
  errorSignInMessage: string | undefined;

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private sessionUserService: SessionUserService,
    private sessionLogicService: SessionLogicService,
    private passwordResetService: PasswordResetService
  ) { }

  ngOnInit(): void {}

  createForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]]
    });
  }

  login(): void {
    this.errorSignInMessage = undefined;
    
    if (!this.form.valid) { return; }
    
    this.signInLoading = true;    
    const { email, password } = this.form.getRawValue();
    this.handleLoginEmail(email, password);    
  }

  async handleLoginEmail(email: string, password: string): Promise<void> {
    try {
      const userCredentials: firebase.auth.UserCredential = await this.sessionUserService.signInEmail(email, password);
      console.log('signIp sucess', userCredentials);
    } catch (error) {
      console.log('Error..................', error);
      this.errorSignInMessage = this.sessionLogicService.addErrorMessage(error);
    } finally {
      this.signInLoading = false;
      this.cdr.detectChanges();
    }
  }

  async loginGoogle(): Promise<void> {
    this.signInLoading = true;
    try {
      const userCredentials: firebase.auth.UserCredential = await this.sessionUserService.signInOrSignUpGoogle();
      console.log('signIp Google sucess', userCredentials);
    } catch (error) {
      this.errorSignInMessage = this.sessionLogicService.addErrorMessage(error);
      console.log('Error Gooogle..................', error);
    } finally {
      this.signInLoading = false;
      this.cdr.detectChanges();
    }
  }

  forgotYourPassword(): void {
    this.passwordResetService.openDialog();
  }

  onLoginSuccessful(result: any): void {
    console.log('login', result);
  }

  getPasswordErrorMessage(): string | undefined {
    return this.sessionLogicService.getPasswordErrorMessage(this.form?.controls.password?.errors);
  }

  getEmailErrorMessage(): string | undefined {
    return this.sessionLogicService.getEmailErrorMessage(this.form?.controls.email?.errors);
  }

}
