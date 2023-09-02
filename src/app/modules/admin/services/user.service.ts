import { Injectable } from '@angular/core';
import { HttpRequestsService } from 'src/app/services/http-requests.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpRequest:HttpRequestsService) { }

  getAllUsers(){
    return this.httpRequest.getRequest('user/GetAllUser');
  }

  removeUser(userId:any){
    return this.httpRequest.deleteRequest('user/DeleteUser' , {
      params:{
        userId:userId
      }
    } )
  }
}
