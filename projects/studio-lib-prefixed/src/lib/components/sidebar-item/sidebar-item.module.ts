import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarItemComponent } from './sidebar-item.component';



@NgModule({
  declarations: [
    SidebarItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarItemComponent
  ]
})
export class SidebarItemModule { }
