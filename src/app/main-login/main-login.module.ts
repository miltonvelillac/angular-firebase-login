import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';

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
    MatButtonModule
  ]
})
export class MainLoginModule { }
