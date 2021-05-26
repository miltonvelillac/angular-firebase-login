import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {

  form: FormGroup = this.createForm();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.pattern(/^[A-Za-z0-9]{4,10}$/)]],
      passwordRepeat: ['', [Validators.pattern(/^[A-Za-z0-9]{4,10}$/)]]
    });
  }

  signUp(): void {
    
  }

}
