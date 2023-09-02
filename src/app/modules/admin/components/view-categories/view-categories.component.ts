import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CategoryDetails } from 'src/app/modules/shared/models/category-response.mdoel';
import { CommonService } from 'src/app/modules/shared/services/common.service';
import { LanguageService } from 'src/app/services/language.service';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.scss'],
  providers: [DialogService , MessageService]
})
export class ViewCategoriesComponent implements OnInit{
  public rowData:any[] = [];
  public columnDefs: ColDef[] =[];
  public categories!: CategoryDetails[];
  public lang:any;
  ref: DynamicDialogRef | undefined;
  constructor(private messageService:MessageService,private commonService: CommonService , private langService: LanguageService, public dialogService: DialogService){}


  ngOnInit(): void {
    this.columnInitialization()
    this.langService.languageChange.subscribe(newLang => {
      this.lang = newLang == 'ar' ? 2 : 1;
      this.getAllCategories(this.lang)
    });
    const result = localStorage.getItem('lang');
    this.lang = result == 'ar' ? 2 : 1;
    this.getAllCategories(this.lang)
  

  }
  getAllCategories(langId:any) {
   this.commonService.getAllCategories(langId).subscribe((result:any)=>{
    this.rowData = result.data;
   })
  }
  

  editCategory(categoryId: any) {
    // Handle edit logic here
 
  }

  removeCategory(categoryId: any) {
    // Handle remove logic here
    this.commonService.removeCategory(categoryId).subscribe((result:any)=>{
      this.categories = this.categories.filter(item => item.id !== categoryId);

    })
  }



columnInitialization(){
  this.columnDefs = [
    {field:'#' , width:60 , valueGetter: 'node.rowIndex + 1'},
    {field:'categoryName' , headerName:'Category Name' , sortable:true , filter:true ,headerClass:'header-class' , flex:1},
    {field:'description' , headerName:'Description' , sortable:true , filter:true ,headerClass:'header-class' , flex:1},
    {field:'image' , headerName:'Category Image'  ,headerClass:'header-class' , flex:1 , cellRenderer:function(params:any){
    return `<img src="http://ayalilly-001-site1.atempurl.com/${params.value}" width="50px" hight="50px">`
    }},
    {field:'action' , headerName:'Actions'  ,headerClass:'header-class' , flex:1},
  ]
}

showAddCategory() {
  this.ref = this.dialogService.open(AddCategoryComponent, { header: 'add Category' , styleClass:'addCategory'});

  this.ref.onClose.subscribe((product: any) => {
    if (product) {
       this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Adding Successfully' });
        this.getAllCategories(this.lang)
    }
});
}

gridOptions:GridOptions<any> = {
  rowSelection: 'multiple',
  domLayout: 'autoHeight',
  pagination: true,
  paginationPageSize: 10,
  overlayLoadingTemplate: `<span> Loading ... </span>`,
};
}