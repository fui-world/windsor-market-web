import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './layout/auth/login/login.component';
import { StartComponent } from './layout/feed/start/start.component';


export const routes: Routes = [
  { path: '', redirectTo: '/login' , pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'feed/start', component: StartComponent },

  { path: '**', redirectTo: '/', pathMatch: 'full' },
  
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
