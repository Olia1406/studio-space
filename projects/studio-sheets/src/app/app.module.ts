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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyContentComponent,
    DiscoverComponent,
    CreateComponent,
    NotificationsComponent,
    SidebarLiComponent
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
