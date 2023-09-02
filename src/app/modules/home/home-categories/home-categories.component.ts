import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../shared/services/common.service';
import { CategoryDetails, CategoryResponse } from '../../shared/models/category-response.mdoel';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-home-categories',
  template: `
    <div class="container">
      <h4 class="title md:text-2xl xxs:text-xl font-bold text-[#070404ba] my-6"> {{"header.categories" | translate}} </h4>
    <div class="grid lg:grid-cols-4 gap-6  xs:grid-cols-1 sm:grid-cols-2">
    <div *ngFor="let category of categories.slice(0, 4)">
     <app-category [categoryObject]="category" (categoryClicked)="showPlants($event)"> </app-category>
     
</div>

</div>
<div class="my-8 flex justify-center items-center w-full">
  <app-button text="{{'home.view' | translate}}" (clickButton)="navigateToCategories()"></app-button>
</div>
</div>
  `,
  styles: [
  ]
})
export class HomeCategoriesComponent implements OnInit {
  public categories:CategoryDetails[] = [];
  lang: any;
  
  constructor(private router:Router , private commonService: CommonService , private langService:LanguageService){

  }

  ngOnInit(): void {
    this.langService.languageChange.subscribe(newLang => {
      const lang = newLang == 'ar' ? 2 : 1;
      this.getAllCategories(lang)
    });
    const result = localStorage.getItem('lang')
    const lang = result == 'ar' ? 2 : 1;
    this.getAllCategories(lang)
    
  }


   public navigateToCategories():void{
  this.router.navigate(['/categories'])
   }

   private getAllCategories(langId:any){
this.commonService.getAllCategories(langId).subscribe((result:CategoryResponse)=>{
this.categories = result?.data;
})
   }

   showPlants(catId:number){
    this.router.navigate(['/categories',catId])
   }
}
