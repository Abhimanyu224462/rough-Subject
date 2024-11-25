import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusesRoutingModule } from './buses-routing.module';
import { BusSearchComponent } from './bus-search/bus-search.component';
import { BusListComponent } from './bus-list/bus-list.component';


@NgModule({
  declarations: [
    BusSearchComponent,
    BusListComponent
  ],
  imports: [
    CommonModule,
    BusesRoutingModule
  ],
  exports:[
    BusListComponent,
    BusSearchComponent
  ]
})
export class BusesModule { }
