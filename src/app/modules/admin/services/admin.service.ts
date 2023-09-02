import { Injectable } from '@angular/core';
import { HttpRequestsService } from 'src/app/services/http-requests.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpService:HttpRequestsService) { }

  public addCategory(formData:any){
    return this.httpService.postRequest('Category/CreateCategory' , formData);
  }

  public addPlant(formData:any){
    return this.httpService.postRequest('Plant/CreatePlant' , formData)
  }

  public addUser(formData:any){
    return this.httpService.postRequest('user/CreateUser' , formData)
  }
}
