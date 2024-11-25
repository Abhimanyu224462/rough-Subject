import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent {

subject$ = new Subject()

ngOnInit(){
  this.subject$.subscribe((res:any)=>{
    console.log("Response from subject", res)
  })

  this.subject$.next(20)
}



}
