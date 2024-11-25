import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusListComponent } from './bus-list/bus-list.component';
import { BusSearchComponent } from './bus-search/bus-search.component';

const routes: Routes = [
  {path:'busList',component:BusListComponent},
  {path:'busSearch',component:BusSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusesRoutingModule { }
