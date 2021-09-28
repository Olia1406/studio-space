import { NgModule } from '@angular/core';
import { StudioLibPrefixedComponent } from './studio-lib-prefixed.component';
import { CustomInputComponent } from './custom-input/custom-input.component';



@NgModule({
  declarations: [
    StudioLibPrefixedComponent,
    CustomInputComponent
  ],
  imports: [
  ],
  exports: [
    StudioLibPrefixedComponent
  ]
})
export class StudioLibPrefixedModule { }
