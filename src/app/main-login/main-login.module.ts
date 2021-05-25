import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainLoginRoutingModule } from './main-login-routing.module';
import { MainLoginComponent } from './main-login.component';



@NgModule({
  declarations: [
    MainLoginComponent
  ],
  imports: [
    CommonModule,
    MainLoginRoutingModule
  ]
})
export class MainLoginModule { }
