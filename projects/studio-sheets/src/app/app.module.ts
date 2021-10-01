import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { GlobalHeaderModule } from 'studio-lib-prefixed';
// import { GlobalHeaderModule } from 'projects/studio-lib-prefixed/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
