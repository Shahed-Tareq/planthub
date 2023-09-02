import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { PlantsDetails } from '../../models/getPlant-response.model';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.scss']
})
export class PlantDetailsComponent implements OnInit {
  public plant!:PlantsDetails;
  public plantId:any;
  constructor(private commonService: CommonService ,private langService:LanguageService, private activatedRoute: ActivatedRoute){
 this.activatedRoute.params.subscribe((params:any)=>{
  this.plantId = params['id']
  this.langService.languageChange.subscribe(newLang => {
    const lang = newLang == 'ar' ? 2 : 1;
    this.getPlantById(this.plantId , lang)
  });
})
  }
  ngOnInit(): void {
    const result = localStorage.getItem('lang')
    const lang = result == 'ar' ? 2 : 1;
    this.getPlantById(this.plantId , lang)
  }


  private getPlantById(plantId:any , langId:any){
    this.commonService.getPlantById(plantId , langId).subscribe((result:any)=>{
if(result.isSuccess){
  this.plant = result.data;
}
    })

  }
}
