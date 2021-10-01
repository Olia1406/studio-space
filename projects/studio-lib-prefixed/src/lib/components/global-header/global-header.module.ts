import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalHeaderComponent } from './global-header.component';


@NgModule({
  declarations: [
    GlobalHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GlobalHeaderComponent
  ]
})
export class GlobalHeaderModule { }
