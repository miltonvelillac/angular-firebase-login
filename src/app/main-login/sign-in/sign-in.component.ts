import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  createForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]]
    });
  }

  login(): void {
    
  }

}
