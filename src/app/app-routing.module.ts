import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main-login',
    loadChildren: () => import('./main-login/main-login.module').then((m) => m.MainLoginModule)
  },
  {
    path: 'animations',
    loadChildren: () => import('./animations/animations.module').then((m) => m.AnimationsModule)
  },
  {
    path: '**',
    redirectTo: 'main-login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
