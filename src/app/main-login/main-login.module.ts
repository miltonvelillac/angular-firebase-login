import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { SharedModule } from '../shared/shared.module';

import { MainLoginRoutingModule } from './main-login-routing.module';
import { MainLoginComponent } from './main-login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SocialMediaSessionComponent } from './social-media-session/social-media-session.component';



@NgModule({
  declarations: [
    MainLoginComponent,
    SignInComponent,
    SignUpComponent,
    SocialMediaSessionComponent
  ],
  imports: [
    CommonModule,
    MainLoginRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class MainLoginModule { }
