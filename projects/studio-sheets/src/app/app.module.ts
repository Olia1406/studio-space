import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StudioLibPrefixedModule} from "../../../studio-lib-prefixed/src/lib/studio-lib-prefixed.module";
// import {StudioLibPrefixedModule} from "studio-lib-prefixed";
// import {CustomInputComponent} from "../../../studio-lib-prefixed/src/lib/custom-input/custom-input.component";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudioLibPrefixedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
