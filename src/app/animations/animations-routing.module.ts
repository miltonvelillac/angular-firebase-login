import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxAnimationsComponent } from './box-animations/box-animations.component';

const routes: Routes = [
  {
    path: '',
    component: BoxAnimationsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule { }
