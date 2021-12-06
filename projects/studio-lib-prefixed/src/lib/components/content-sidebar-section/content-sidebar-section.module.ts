import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSidebarSectionComponent } from './content-sidebar-section.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    ContentSidebarSectionComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule
  ],
  exports: [
    ContentSidebarSectionComponent
  ]
})
export class ContentSidebarSectionModule { }
