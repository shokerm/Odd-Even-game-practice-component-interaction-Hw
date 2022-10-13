import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  randomNUmber = 0;
  
  evenArray:number[] = [];
  oddArray:number[] = [];
 

  selectNumber(value: number){
    this.randomNUmber = value;
    value % 2 ===0 ? this.evenArray.push(value): this.oddArray.push(value);
    console.log(this.evenArray);
    console.log(this.oddArray);
  }
}
