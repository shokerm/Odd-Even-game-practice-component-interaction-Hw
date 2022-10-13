import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  @Output() intervalFired = new EventEmitter();
  buttonClicked(){
    let rand:number = Math.floor(Math.random()*(10))
    this.intervalFired.emit(rand);
  }


}
