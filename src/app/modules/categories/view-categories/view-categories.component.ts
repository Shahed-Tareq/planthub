import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../../home/services/image-service.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CategoryDetails, CategoryResponse } from '../../shared/models/category-response.mdoel';
import { CommonService } from '../../shared/services/common.service';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';
@Component({
  selector: 'app-view-categories',
  template: `
  <ng-container *ngIf="loading">
    <app-loader></app-loader>
</ng-container>
<ng-container *ngIf="!loading">
<div class="search-bar w-full flex justify-center flex-col items-center h-[48vh]" >
  <p class="mb-4 break-words w-[50%] text-center text-[#000000c4] text-base">{{'general.searchTitle' | translate }}</p>
   <span class="p-input-icon-left w-[50%]">
    <i class="pi pi-search"></i>
    <input type="text" (blur)="searchCategory()" [(ngModel)]="searchTerm"  pInputText placeholder="{{'categories.search' | translate}}" class="pl-10 pr-3 py-2 font-semibold placeholder-gray-500 text-black rounded-xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus-within:ring-2 w-full" />
</span>

  </div>
  
       <div class="container">
       <div class="flex justify-center items-center"> </div>
      <h4 class="title text-[30px] font-bold text-[#070404ba] my-4"> {{"header.categories" | translate}} </h4>
    <div class="grid lg:grid-cols-4 gap-6  xs:grid-cols-1 sm:grid-cols-2">
   <ng-container *ngIf="categories;  else noContent">
   <div *ngFor="let category of categories">
     <app-category [categoryObject]="category" (categoryClicked)="showPlants($event)"> </app-category>
     </div>
   </ng-container>

</div>
</div>
</ng-container>
   
<ng-template #noContent>
<p>No Content</p>
</ng-template>
  `,
  styles: [
    `
    .search-bar{
      width:100%;
      margin: 0px auto;
      margin-bottom:10px;
      background-image: url('https://images.pexels.com/photos/904621/pexels-photo-904621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position:relative;
    }
    `
  ]
})
export class ViewCategoriesComponent implements OnInit {
  public categories:CategoryDetails[] = [];
  public searchTerm:string ='';
  public loading: boolean = false;
  public categoriesCopy!:CategoryDetails[]
  search=faSearch;
  lang:any;
  constructor(private commonService: CommonService , private router:Router ,private langService: LanguageService){
 }

  ngOnInit(): void {
    this.langService.languageChange.subscribe(newLang => {
      this.lang = newLang == 'ar' ? 2 : 1;
      this.getAllCategories(this.lang)
    });
    
    const result = localStorage.getItem('lang')
    this.lang = result == 'ar' ? 2 : 1;
    this.getAllCategories(this.lang)
  }

  private getAllCategories(langId:any){
    this.loading = true;
    this.commonService.getAllCategories(langId).subscribe((result:CategoryResponse)=>{
      this.categories = result.data;
      this.categoriesCopy = this.categories;
      this.loading = false;

    })
  }

  showPlants(catId:number){
    this.router.navigate(['/categories',catId])
   }

   searchCategory(){
    if(this.searchTerm.trim()){
      this.commonService.categorySearch(this.searchTerm , this.lang).subscribe((result:any)=>{
    if(result.isSuccess){
      this.categories = result.data;
    } 
      })
    }
    else{
      this.categories = this.categoriesCopy;
  }
    
   }
}
