import { Component, OnInit } from '@angular/core';
import { EvenOddNubmersService } from './even-odd-nubmers.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  randomNUmber = 0;
  
  evenArray:number[] = [];
  oddArray:number[] = [];
 

  selectNumber(value: number){
    //A.
    // this.randomNUmber = value;
    // value % 2 ===0 ? this.evenArray.push(value): this.oddArray.push(value);
    // console.log(this.evenArray);
    // console.log(this.oddArray);
   //B.
    this.randomNUmber = value;
    value % 2 ===0 ? this.EvenOddNumbersService.evenArray.push(value): this.EvenOddNumbersService.oddArray.push(value);
    console.log(this.evenArray);
    console.log(this.oddArray);
  }

  constructor(private EvenOddNumbersService:EvenOddNubmersService ){

  }

 ngOnInit():void {
  this.evenArray = this.EvenOddNumbersService.evenArray;
  this.oddArray = this.EvenOddNumbersService.oddArray;

 }
}
