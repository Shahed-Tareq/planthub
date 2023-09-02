import { Injectable } from '@angular/core';
import { HttpRequestsService } from 'src/app/services/http-requests.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpRequestService:HttpRequestsService) { }

  public getAllCategories(langId:any){
    return this.httpRequestService.getRequest('Category/GetAllCategories' , {
      params: {
        langId:langId
      }
    })
  }
  public getAllPlants(langId:any){
    return this.httpRequestService.getRequest('Plant/GetAllPlants' , {
      params:{
        langId:langId
      }
    })
  }
public getPlantById(plantId:number , langId:any){
  return this.httpRequestService.getRequest('Plant/GetPlantById' , {
        params: {
          plantId: plantId,
          langId:langId
        },
      }
      )
}

public getCategoryById(categoryId:number){
  return this.httpRequestService.getRequest('Category/GetCategoryById' , 
  {
    params: {
      categoryId: categoryId,
    },
  }
  )
}

public getPlantByCategoryId(catId:number , langId:any){
  return this.httpRequestService.getRequest('Plant/GetPlanstByCategoryId',{
 params:{
  categoryId:catId,
  langId:langId
 }
  })
}

removeCategory(categoryId:any){
return this.httpRequestService.deleteRequest('Category/DeleteCategoty' , {
  params: {
    categoryId:categoryId
  }
})
}
removePlant(plantId:any){
return this.httpRequestService.deleteRequest('Plant/DeletePlant' , {
  params: {
    categoryId:plantId
  }
})
}

categorySearch(categoryName:string, langId:any){
return this.httpRequestService.getRequest('Plant/SearchForCategory' , {
  params: {
    categoryName:categoryName,
    langId:langId
  }
})
}
}
