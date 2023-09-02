import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { GetAllPlantsResponse, PlantsDetails } from '../../plants/models/getPlant-response.model';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-home-plants',
  template: `
    
    <div class="container">
  <h4 class="title md:text-2xl xxs:text-xl font-bold text-[#070404ba] mt-6"> {{"community.plants" | translate}} </h4>
  <p class="mb-6 text-[#665f5f] font-regular"> Lorem ipsum dolor sit amet consectetur,  sit libero animi nobis, similique</p>

<!-- <div class="border-1 surface-border border-round m-2  py-5 px-3">
    <app-plant [plantObject]="plant"> </app-plant>
</div> -->
<div class="grid lg:grid-cols-4 gap-6  xs:grid-cols-1 sm:grid-cols-2">
    <div *ngFor="let plant of plants.slice(0, 4)">
    <app-plant [plantObject]="plant"> </app-plant>
     
</div>

</div>
  `,
  styles: [
  ]
})
export class HomePlantsComponent implements OnInit {
  public plants:PlantsDetails[] = [];
  responsiveOptions!: any[];
  langId:any;
  constructor(private commonService: CommonService , private langService: LanguageService){

  }

  ngOnInit(): void {
   this.langService.languageChange.subscribe(newLang=>{
    const lang = newLang == 'en' ? 1 : 2;
    this.getAllPlants(lang)
   })
   const result = localStorage.getItem('lang')
   const lang = result == 'ar' ? 2 : 1;
   this.getAllPlants(lang)

  }

  getAllPlants(langId:any){
    this.commonService.getAllPlants(langId).subscribe((result:GetAllPlantsResponse)=>{
      if(result.isSuccess){
this.plants = result.data;
      }
    })
  }
}
