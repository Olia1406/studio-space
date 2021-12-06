import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './pages/discover/discover.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardsComponent } from './pages/my-content/dashboards/dashboards.component';
import { DefaultDashboardComponent } from './pages/my-content/dashboards/default-dashboard/default-dashboard.component';
import { DataComponent } from './pages/my-content/data/data.component';
import { MyContentComponent } from './pages/my-content/my-content.component';
import { PortfoliosComponent } from './pages/my-content/portfolios/portfolios.component';
import { DefaultRankSheetComponent } from './pages/my-content/rank-sheets/default-rank-sheet/default-rank-sheet.component';
import { RankSheetsComponent } from './pages/my-content/rank-sheets/rank-sheets.component';
import { ReportsComponent } from './pages/my-content/reports/reports.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'my-content', component: MyContentComponent, children: [
    {path: 'dashboards', component: DashboardsComponent},
    {path: 'data', component: DataComponent },
    {path: 'reports', component: ReportsComponent},
    {path: 'portfolios', component: PortfoliosComponent},
    {path: 'rank-sheets', component: RankSheetsComponent },
    {path: '', component: DashboardsComponent, pathMatch: 'full'}
  ]},
  {path: 'my-content/dashboard/:id', component: DefaultDashboardComponent},
  {path: 'my-content/rank-sheet/:rsID', component: DefaultRankSheetComponent},
  {path: 'discover', component: DiscoverComponent},
  {path: 'create',
  loadChildren: () => import('./pages/create/create.module').then( m =>  m.CreateModule)
},
  {path: 'notifications', component: NotificationsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
