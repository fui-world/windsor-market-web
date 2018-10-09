import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AuthService
  ]
})

export class AuthModule { }
