import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalHeaderComponent } from './global-header.component';
// import { SvgIconModule } from 'projects/studio-lib-prefixed/src/public-api';


@NgModule({
  declarations: [
    GlobalHeaderComponent
  ],
  imports: [
    CommonModule,
    // SvgIconModule
  ],
  exports: [
    GlobalHeaderComponent
  ]
})
export class GlobalHeaderModule { }
