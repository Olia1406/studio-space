import { NgModule } from '@angular/core';
import { StudioLibPrefixedComponent } from './studio-lib-prefixed.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    StudioLibPrefixedComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    StudioLibPrefixedComponent
  ]
})
export class StudioLibPrefixedModule { }
