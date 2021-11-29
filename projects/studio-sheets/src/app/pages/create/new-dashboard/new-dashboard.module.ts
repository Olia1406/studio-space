import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDashboardComponent } from './new-dashboard.component';
import { NewDashboardRoutingModule } from './new-dashboard-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DropdownModule } from 'primeng/dropdown';
import { ContentSidebarModule, ContentSidebarSectionModule } from 'studio-lib-prefixed';

@NgModule({
  declarations: [NewDashboardComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    DropdownModule,

    // ContentSidebarModule,
    // ContentSidebarSectionModule,

    NewDashboardRoutingModule
  ]
})
export class NewDashboardModule { }
