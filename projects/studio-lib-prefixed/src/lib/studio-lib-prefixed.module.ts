import { NgModule } from '@angular/core';
import { StudioLibPrefixedComponent } from './studio-lib-prefixed.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    StudioLibPrefixedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StudioLibPrefixedComponent
  ]
})
export class StudioLibPrefixedModule { }
