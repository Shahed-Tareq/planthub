import { Component, OnInit } from '@angular/core';
import { PlantsDetails } from 'src/app/modules/plants/models/getPlant-response.model';
import { PlantService } from 'src/app/modules/plants/services/plant.service';
import { CommonService } from 'src/app/modules/shared/services/common.service';

@Component({
  selector: 'app-saved-plant',
  templateUrl: './saved-plant.component.html',
  styleUrls: ['./saved-plant.component.scss']
})
export class SavedPlantComponent implements OnInit{

  public searchTerm!:string;
  plants!:PlantsDetails[];

  constructor(private plantService: PlantService){}

  ngOnInit(): void {
  this.plantService.getAllSavedPlants().subscribe((result:any)=>{
    this.plants = result.data;
  })
  }



}
