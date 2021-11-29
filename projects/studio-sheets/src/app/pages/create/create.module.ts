import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatureCardModule } from 'studio-lib-prefixed';
import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,

    CreatureCardModule,

    CreateRoutingModule
  ]
})
export class CreateModule { }
