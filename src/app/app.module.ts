import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlightsModule } from './flights/flights.module';
import { TrainsModule } from './trains/trains.module';
import { BusesModule } from './buses/buses.module';
import { HotelsModule } from "./hotels/hotels.module";
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlightsModule,
    TrainsModule,
    BusesModule,
    HotelsModule,
    SharedModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
