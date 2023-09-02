import { Injectable } from '@angular/core';
import { HttpRequestsService } from 'src/app/services/http-requests.service';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private httpRequestService: HttpRequestsService) { }

  savePlant(plantId:number){
    return this.httpRequestService.postRequest('SavePlant/SaveNewPlant' , plantId)
  }

  getAllSavedPlants(){
    return this.httpRequestService.getRequest('SavePlant/GetPreservedPlants')
  }

  searchPlantByCatId(PlantName:any , CategoryId:any , langId:any){
    return this.httpRequestService.getRequest('Plant/SearchForPlants' , {
      params:{
        PlantName:PlantName,
        CategoryId:CategoryId,
        langId:langId

      }
    })
  }
}
