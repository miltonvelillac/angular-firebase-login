import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main-login',
    loadChildren: () => import('./main-login/main-login.module').then((m) => m.MainLoginModule)
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
