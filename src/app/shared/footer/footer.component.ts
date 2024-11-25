import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
constructor(private shrdSrvc:SharedServiceService){}

countF:number = 0;

ngOnInit(){
  this.shrdSrvc.subject$.subscribe((res:any)=>{
    this.countF = res
    console.log("count response at footer", this.countF)
  })
}

}
