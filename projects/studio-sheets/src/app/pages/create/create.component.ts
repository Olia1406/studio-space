import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreatureCard } from 'studio-lib-prefixed';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  creaturesList: Array<CreatureCard> = [
    {
      imgURL: 'd-multiple.png',
      title: 'New Basic Dashboard',
      description: `Create new visualizations from scratch`,
      pagePath: 'new-dashboard'
    },
    {
      imgURL: 'sheet.png',
      title: 'New Report',
      description: `Create ready-to-print report, integrating text, tables and visualizations. 
      Use our natural language generator plug in to automate and save time `,
      pagePath: 'new-report'
    },  
    { 
      imgURL: 'defaultImg.png',
      title: 'New Portal Page',
      description: `Choose your preferred layout, bring your favorite visualizations, 
      integrate custom and third-party widgets and customize your preferred views `,
      pagePath: ''
    },
    {
      imgURL: 'financial.png',
      title: 'New Quantitative Analysis',
      description: `Apply basic and advanced quantitative techniques, incl. 
      AI/ML, prepare your data and set up multi-step workflows`,
      pagePath: ''
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeToPage(pathUrl: string) {
     this.router.navigateByUrl(`/create/${pathUrl}`)
  }

}
