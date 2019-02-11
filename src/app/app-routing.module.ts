import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './shared/components/chat/chat.component';
import { AuthGuardService } from './core/authentication/auth-guard.service';
import { HomeComponent } from './shared/components/home/home.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home', component: HomeComponent },
  {
    path: 'login',
    loadChildren: './shared/components/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './shared/components/register/register.module#RegisterModule'  },
  {
    path: 'profile',
    loadChildren: './shared/components/profile/profile.module#ProfileModule' ,
    canLoad: [AuthGuardService]
  },
  {
    path: 'chats',
    component: ChatComponent
  }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }