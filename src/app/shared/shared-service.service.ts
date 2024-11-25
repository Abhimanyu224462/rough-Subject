import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  

  constructor() { }
  selectedHotelCount:number = 0;
//   addHotel(){
//     this.selectedHotelCount ++
// console.log("counted:",this.selectedHotelCount)

//   }

  // getHotelCount(){
  //   return this.selectedHotelCount
  // }

  subject$ = new Subject()

  sendData(data:any){
    this.subject$.next(data)
  }
}
