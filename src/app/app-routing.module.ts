import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { LoginGuard } from './authentication/login.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canLoad: [LoginGuard]
  },
  {
    path: 'animais',
    loadChildren: () => import('./animais/animais.module').then((m) => m.AnimaisModule),
    canLoad: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
