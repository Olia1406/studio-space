import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { HomeComponent } from './pages/home/home.component';
import { MyContentComponent } from './pages/my-content/my-content.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'my-content', component: MyContentComponent},
  {path: 'discover', component: DiscoverComponent},
  {path: 'create', component: CreateComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
