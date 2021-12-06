import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentSidebarModule, ContentSidebarSectionModule, CreatureCardModule} from 'studio-lib-prefixed';
import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import {NewDashboardComponent} from "./new-dashboard/new-dashboard.component";
import {NewReportComponent} from "./new-report/new-report.component";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {DropdownModule} from "primeng/dropdown";

@NgModule({
  declarations: [CreateComponent, NewDashboardComponent, NewReportComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    DropdownModule,

    CreatureCardModule,
    ContentSidebarModule,
    ContentSidebarSectionModule,

    CreateRoutingModule
  ]
})
export class CreateModule { }
