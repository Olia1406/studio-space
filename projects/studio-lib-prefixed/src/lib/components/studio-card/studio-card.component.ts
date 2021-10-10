import { Component, Input, OnInit } from '@angular/core';
import { ICard } from './card.interface';

@Component({
  selector: 'st-studio-card',
  templateUrl: './studio-card.component.html',
  styleUrls: ['./studio-card.component.scss']
})
export class StudioCardComponent implements OnInit {

  @Input() cardData: ICard = {
    id: 1,
    contentItemSrc: 'https://firebasestorage.googleapis.com/v0/b/my-project-d612f.appspot.com/o/sun.png?alt=media&token=ed1d41e8-37bd-4cf1-a28d-d02c47332a3e',
    cardName: 'Default dashboard',
    cardIconClass: '',
    onClick: () => {}
  }
  constructor() { }

  ngOnInit(): void {
  }

}
