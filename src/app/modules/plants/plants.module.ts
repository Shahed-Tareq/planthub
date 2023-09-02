import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantsRoutingModule } from './plants-routing.module';
import { PlantDetailsComponent } from './components/plant-details/plant-details.component';



@NgModule({
  declarations: [
    PlantDetailsComponent
  ],
  imports: [
    CommonModule,
    PlantsRoutingModule
  ]
})
export class PlantsModule { }
