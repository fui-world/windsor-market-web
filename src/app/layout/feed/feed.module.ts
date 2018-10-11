import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [StartComponent],
  exports: [StartComponent]
})
export class FeedModule { }
