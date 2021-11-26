import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-font-sizer',
  templateUrl: './font-sizer.component.html',
  styleUrls: ['./font-sizer.component.scss']
})
export class FontSizerComponent implements OnInit {

  @Input() size!: number;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  dec(){this.resize(-1)}
  inc(){this.resize(+1)}

  resize(delta: number){
      this.size = Math.min(40, Math.max(8, this.size + delta));
      this.sizeChange.emit(this.size);
  }

}
