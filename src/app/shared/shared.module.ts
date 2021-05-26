import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MainButtonComponent } from './ui/main-button/main-button.component';



@NgModule({
  declarations: [
    MainButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    MainButtonComponent
  ]
})
export class SharedModule { }
