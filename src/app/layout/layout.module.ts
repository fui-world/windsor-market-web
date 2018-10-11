import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material/material.module';
import { FeedModule } from './feed/feed.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    MaterialModule,
    FeedModule
  ]
})
export class LayoutModule { }
