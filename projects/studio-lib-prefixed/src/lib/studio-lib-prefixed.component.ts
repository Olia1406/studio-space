import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-studio-lib-prefixed',
  template: `
    <p>
      studio-lib-prefixed works!!!!
    </p>
    <st-custom-input></st-custom-input>
  `,
  styles: [
  ]
})
export class StudioLibPrefixedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
