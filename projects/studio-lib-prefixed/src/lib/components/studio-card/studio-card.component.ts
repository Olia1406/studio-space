import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from './card.interface';

@Component({
  selector: 'st-studio-card',
  templateUrl: './studio-card.component.html',
  styleUrls: ['./studio-card.component.scss']
})
export class StudioCardComponent implements OnInit {
  @Output() cardEvent = new EventEmitter<number | string>();

  @Input() cardData: Card = {
    id: 1,
    contentItemSrc: 'd-multiple.png',
    cardName: 'Default dashboard',
    cardIconClass: ''
  }
  constructor() { }

  defineCard(id: number | string) {
    this.cardEvent.emit(id);
  }

  ngOnInit(): void {
  }

}
