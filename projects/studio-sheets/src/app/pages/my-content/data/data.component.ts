import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Events } from 'ag-grid-community';
import { FontSizerComponent } from './font-sizer/font-sizer.component';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit, AfterViewInit{
  fontSizePx = 16;

  @ViewChild(FontSizerComponent) fs: any;
  @ViewChild('tempVar') tempVar!: ElementRef;
  
  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.fs);
    console.log(this.tempVar.nativeElement);
    this.tempVar.nativeElement.style.color = 'red';
  }

  ngOnInit(): void {
  }
  
}
