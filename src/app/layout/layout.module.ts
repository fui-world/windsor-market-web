import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    DashboardModule,
    SharedModule
  ],
  exports: [
    AuthModule,
    DashboardModule,
    SharedModule
  ]
})
export class LayoutModule { }
