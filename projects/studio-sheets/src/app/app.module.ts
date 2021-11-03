import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentHeaderModule, GlobalHeaderModule, SvgIconModule, SidebarItemModule, StudioCardModule} from 'studio-lib-prefixed';

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
import { DefaultDashboardComponent } from './pages/my-content/dashboards/default-dashboard/default-dashboard.component';

import {BreadcrumbModule} from 'primeng/breadcrumb';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCumulioModule } from 'ngx-cumulio';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { DefaultRankSheetComponent } from './pages/my-content/rank-sheets/default-rank-sheet/default-rank-sheet.component';

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
    RankSheetsComponent,
    DefaultDashboardComponent,
    DefaultRankSheetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    GlobalHeaderModule,
    SvgIconModule,
    StudioCardModule,
    SidebarItemModule,
    BreadcrumbModule,
    ContentHeaderModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxCumulioModule.forRoot(),
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
