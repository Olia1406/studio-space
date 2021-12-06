import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create.component';
import {NewDashboardComponent} from "./new-dashboard/new-dashboard.component";
import {NewReportComponent} from "./new-report/new-report.component";

const routes: Routes = [
  {path: '', component: CreateComponent},
  {path: 'new-dashboard', component: NewDashboardComponent},
  {path: 'new-report', component: NewReportComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
