import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewReportRoutingModule } from './new-report-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { NewReportComponent } from './new-report.component';

@NgModule({
  declarations: [NewReportComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,

    NewReportRoutingModule
  ]
})
export class NewReportModule { }
