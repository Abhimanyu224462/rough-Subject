import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    FlightSearchComponent,
    FlightListComponent
  ]
})
export class FlightsModule { }
