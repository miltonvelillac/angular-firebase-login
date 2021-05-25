import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxAnimationsComponent } from './box-animations/box-animations.component';
import { AnimationsRoutingModule } from './animations-routing.module';

@NgModule({
  declarations: [
    BoxAnimationsComponent
  ],
  imports: [
    CommonModule,
    AnimationsRoutingModule
  ]
})
export class AnimationsModule { }
