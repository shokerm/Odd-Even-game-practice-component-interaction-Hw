import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() currentOddNumber:number = 0;
  @Input() oddArrayC: number[] = [];

  

}
