import { Component, Input } from '@angular/core';
import { Category } from '../../models/category.model';
import { Router } from '@angular/router';
import { PlantsDetails } from 'src/app/modules/plants/models/getPlant-response.model';
import { PlantService } from 'src/app/modules/plants/services/plant.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-plant',
  template: `
    <div class="card bg-white rounded overflow-hidden shadow-md"> 
    <img [src]="'http://ayalilly-001-site1.atempurl.com/'+plantObject.plantImage" class="w-full h-60 object-cover"> 
    <div class="py-4 px-4">
      <h3>{{plantObject.plantName}}</h3>
      <p class = "text-sm my-3 text-justify text-[#3a3232f2]">{{plantObject.plantDescription | textLength:20}}</p>
      <div>
     
      <div class="w-full flex justify-between items-center">
        <app-button text="{{'home.viewBtn' | translate}}" (clickButton)="navigateToDetails(plantObject.plantId)"> </app-button>
      <span class="cursor-pointer text-2xl" (click)="savePlant(plantObject.plantId)" *ngIf="authService.loggedIn() && showSaveItem">
        <i class="fa-solid fa-bookmark" *ngIf="plantObject.isSaved"> </i>
        <i class="fa-regular fa-bookmark" *ngIf="!plantObject.isSaved"> </i>
    </span>
        
</div>
  `,
  styles: [
  ]
})
export class PlantComponent {

  constructor(private router:Router , private plantService: PlantService , public authService: AuthService){}

  @Input() plantObject : PlantsDetails = {} as PlantsDetails;
  @Input() showSaveItem : boolean = true;

  public navigateToDetails(plantId:any){
this.router.navigate([`plant/details/${plantId}`] )
  }

  savePlant(plantId:number){
    this.plantService.savePlant(plantId).subscribe((result:any)=>{
      if(result.isSuccess){
        this.plantObject.isSaved = !this.plantObject.isSaved;

      }
    })
  }
}
