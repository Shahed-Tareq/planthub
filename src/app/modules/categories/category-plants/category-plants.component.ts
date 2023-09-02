import { Component, OnInit } from '@angular/core';
import { CategoryDetails, CategoryResponse } from '../../shared/models/category-response.mdoel';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../shared/services/common.service';
import { PlantsDetails } from '../../plants/models/getPlant-response.model';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-category-plants',
  templateUrl: './category-plants.component.html',
  styleUrls: ['./category-plants.component.scss']
})
export class CategoryPlantsComponent implements OnInit{
  public searchTerm:string =''
  public plants !: PlantsDetails[]
  public categoryId!:number;
  categories!: CategoryDetails[];
  category: CategoryDetails | undefined;
  lang: any;
  constructor(private activateRoue:ActivatedRoute , private commonService: CommonService , private langService: LanguageService ){
    this.activateRoue.params.subscribe((params)=>{
      this.categoryId = params['id']
    
      this.langService.languageChange.subscribe(newLang => {
        const lang = newLang == 'ar' ? 2 : 1;
        this.getAllCategories(this.categoryId , lang)
        this.getPlantsByCatId(this.categoryId , lang)
      });
   
    })
  }
  ngOnInit(): void {
    const result = localStorage.getItem('lang')
    const lang = result == 'ar' ? 2 : 1;
    this.getAllCategories(this.categoryId , lang)
    this.getPlantsByCatId(this.categoryId , lang)
  }

getPlantsByCatId(catId:number , langId:any){
  this.commonService.getPlantByCategoryId(catId,langId).subscribe((result:any)=>{
   this.plants = result.data;
  })
}

private getAllCategories(catId:number , langId:any){
  this.commonService.getAllCategories(langId).subscribe((result:CategoryResponse)=>{
    this.categories = result.data;
    this.getCategoryName(catId)
  })
}

getCategoryName(catId:number){
this.category = this.categories.find(form => form.id == catId)
}
}
