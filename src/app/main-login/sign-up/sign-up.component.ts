import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { requiredFieldMessage, wrongEmailMessage, wrongPasswordMessage } from 'src/app/shared/utils/constants';
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
    wrongPasswor: wrongPasswordMessage
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]],
      passwordRepeat: ['', [Validators.required, Validators.pattern(passwordRegex)]]
    });
  }

  signUp(): void {
    
  }

}
