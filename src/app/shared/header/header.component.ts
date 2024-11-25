import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private shrdSrvc:SharedServiceService){
    // this.count = this.shrdSrvc.getHotelCount()
  }
count: number = 0;

ngOnInit(){
// this.count = this.shrdSrvc.getHotelCount()

this.shrdSrvc.subject$.subscribe((res:any)=>{
  this.count = res
  console.log("count with subject", this.count)
})
}

}
