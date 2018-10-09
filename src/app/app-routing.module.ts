import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './layout/auth/login/login.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },

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
