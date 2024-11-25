import { Component } from '@angular/core';
import { SharedServiceService } from '../shared/shared-service.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent {
countH:number = 0
  constructor(private shrdSrvc:SharedServiceService){
    // this.countH = this.shrdSrvc.getHotelCount()
  }
  

  addHotel(){
    this.countH++
    this.shrdSrvc.sendData(this.countH)
  }
}
