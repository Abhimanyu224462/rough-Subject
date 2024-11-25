import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainsRoutingModule } from './trains-routing.module';
import { TrainSearchComponent } from './train-search/train-search.component';
import { TrainListComponent } from './train-list/train-list.component';
import { BusListComponent } from '../buses/bus-list/bus-list.component';
import { BusSearchComponent } from '../buses/bus-search/bus-search.component';
import { BusesModule } from '../buses/buses.module';


@NgModule({
  declarations: [
    TrainSearchComponent,
    TrainListComponent
  ],
  imports: [
    CommonModule,
    TrainsRoutingModule,
    BusesModule
  ],
  exports:[
    BusListComponent,
    BusSearchComponent,
    TrainListComponent,
    TrainSearchComponent
  ]
})
export class TrainsModule { }
