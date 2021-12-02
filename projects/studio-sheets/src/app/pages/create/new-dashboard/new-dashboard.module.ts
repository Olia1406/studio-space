import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDashboardComponent } from './new-dashboard.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DropdownModule } from 'primeng/dropdown';
import { ContentSidebarModule, ContentSidebarSectionModule } from 'studio-lib-prefixed';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: NewDashboardComponent}
];


@NgModule({
  declarations: [NewDashboardComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    DropdownModule,

    // ContentSidebarModule,
    // ContentSidebarSectionModule,

    RouterModule.forChild(routes)
  ]
})
export class NewDashboardModule { }
