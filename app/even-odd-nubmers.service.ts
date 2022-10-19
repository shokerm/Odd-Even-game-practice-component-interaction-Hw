import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvenOddNubmersService {

  constructor() { }
  evenArray:number[] = [];
  oddArray:number[] = [];
}
