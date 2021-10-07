import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { GlobalHeaderModule, SvgIconModule } from 'studio-lib-prefixed';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MyContentComponent } from './pages/my-content/my-content.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { CreateComponent } from './pages/create/create.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { RouterModule } from '@angular/router';
import { SidebarLiComponent } from './components/sidebar-li/sidebar-li.component';
import { DashboardsComponent } from './pages/my-content/dashboards/dashboards.component';
import { DataComponent } from './pages/my-content/data/data.component';
import { ReportsComponent } from './pages/my-content/reports/reports.component';
import { PortfoliosComponent } from './pages/my-content/portfolios/portfolios.component';
import { RankSheetsComponent } from './pages/my-content/rank-sheets/rank-sheets.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyContentComponent,
    DiscoverComponent,
    CreateComponent,
    NotificationsComponent,
    SidebarLiComponent,
    DashboardsComponent,
    DataComponent,
    ReportsComponent,
    PortfoliosComponent,
    RankSheetsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    GlobalHeaderModule,
    SvgIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
