import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatureCardComponent } from './creature-card.component';



@NgModule({
  declarations: [CreatureCardComponent],
  imports: [
    CommonModule
  ],
  exports: [CreatureCardComponent]
})
export class CreatureCardModule { }
