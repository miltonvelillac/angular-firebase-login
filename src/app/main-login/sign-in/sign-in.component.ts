import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import firebase from 'firebase/app';

import { SessionUserService } from 'src/app/shared/services/session-user/session-user.service';
import { requiredFieldMessage, wrongEmailMessage, wrongPasswordMessage } from 'src/app/shared/utils/constants';
import { passwordRegex } from 'src/app/shared/utils/regex';

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

  errorSignInMessage: string | undefined;

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private sessionUserService: SessionUserService
  ) { }

  ngOnInit(): void {}

  createForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]]
    });
  }

  async login(): Promise<void> {
    this.errorSignInMessage = undefined;
    if (!this.form.valid) { return; }

    const { email, password } = this.form.getRawValue();

    try {
      const userCredentials: firebase.auth.UserCredential = await this.sessionUserService.signInEmail(email, password);
      console.log('signIp sucess', userCredentials);
    } catch (error) {
      console.log('Error..................', error);
      this.errorSignInMessage = error.message;
      this.cdr.detectChanges();
    }
  }

  async loginGoogle(): Promise<void> {
    try {
      const userCredentials: firebase.auth.UserCredential = await this.sessionUserService.signInGoogle();
      console.log('signIp Google sucess', userCredentials);
    } catch (error) {
      console.log('Error Gooogle..................', error);
      this.errorSignInMessage = error.message;
      this.cdr.detectChanges();
    }
  }

  onLoginSuccessful(result: any): void {
    console.log('login', result);
  }

}
