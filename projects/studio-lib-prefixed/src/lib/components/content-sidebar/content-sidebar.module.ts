import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSidebarComponent } from './content-sidebar.component';

@NgModule({
  declarations: [
    ContentSidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentSidebarComponent
  ]
})
export class ContentSidebarModule { }
