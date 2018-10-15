import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material/material.module';
import { FeedModule } from './feed/feed.module';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    MaterialModule,
    FeedModule
  ],
  declarations: [SettingsComponent],
  exports: [SettingsComponent]
})
export class LayoutModule { }
