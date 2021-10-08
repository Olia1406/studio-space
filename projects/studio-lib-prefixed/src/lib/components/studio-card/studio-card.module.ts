import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioCardComponent } from './studio-card.component';

@NgModule({
    declarations: [
        StudioCardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        StudioCardComponent
    ]
})
export class StudioCardModule { }