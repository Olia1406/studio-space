import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'st-svg-icon',
  // templateUrl: './svg-icon.component.html',
    // <use attr.xlink:href="{{ pathToSVG }}.svg#{{ icon }}" ngClass="eagle-svg-icon {{ icon }}"></use>

  //   <svg [style.width]="widthStyle" [style.height]="heightStyle">
  //   <use attr.xlink:href="{{ pathToSVG }}.svg#{{ icon }}" "></use>
  // </svg>
  template: `
  <svg [style.width]="widthStyle" [style.height]="heightStyle">
    <use attr.href="{{ pathToSVG }}.svg#{{ icon }}"></use>
  </svg>
`,
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {


  @Input() icon: string = 'LIST_VIEW';
  @Input() pathToSVG = 'projects/studio-sheets/src/assets/images/e-icon';

  // for example "30px"
  @Input() widthStyle: string | null = null;
  @Input() heightStyle: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
