import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';

import { MainLoginRoutingModule } from './main-login-routing.module';
import { MainLoginComponent } from './main-login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    MainLoginComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    MainLoginRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class MainLoginModule { }
