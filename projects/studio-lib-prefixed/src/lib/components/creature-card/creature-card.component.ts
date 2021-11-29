import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreatureCard } from './creature-card.interface';


@Component({
  selector: 'st-creature-card',
  templateUrl: './creature-card.component.html',
  styleUrls: ['./creature-card.component.scss']
})
export class CreatureCardComponent implements OnInit {

@Input() creatureDescription: CreatureCard = {
    imgURL: 'd-multiple.png',
    title: 'Create new dashboard',
    description:`Choose your preferred layout, bring your favorite visualizations, 
    integrate custom and third-party widgets and customize your preferred views `,
    pagePath: '/'
  }
@Output() pagePath = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  definePath(path: string) {
    this.pagePath.emit(path)
  }

}
