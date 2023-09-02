import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpRequestsService } from 'src/app/services/http-requests.service';
import { userType } from '../../shared/enums/user-type.enum';
import {  Router } from '@angular/router';
import { Data } from '../models/login.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userTypeEnum = userType;
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private httpService: HttpRequestsService , private router:Router) { }

  public login(loginModel:any){
 return this.httpService.postRequest('account/SignIn' , loginModel);
  }
  public signUp(signupModel:any):Observable<any>{
return this.httpService.postRequest('account/SignUp' , signupModel)
  }

  public confirmEmail(confirmModel:any){
    return this.httpService.postRequest('account/ConfirmationEmail' , confirmModel)
  }


  public redirectionType(userType:number){
    if(userType == this.userTypeEnum.farmer ||userType == this.userTypeEnum.regularUser ){
       this.router.navigate(['/'])
    } else if(userType == this.userTypeEnum.admin){
      this.router.navigate(['/admin'])
    }
  }


public loggedIn(){
  return !!localStorage.getItem('token');
}
public getToken(){
  return localStorage.getItem('token')
}

public logout(){
  localStorage.removeItem('token')
  localStorage.removeItem('userTypeForNavBar')
  localStorage.removeItem('userType')
  this.router.navigate(['/auth'])
}

public storeUserModel(userModel:Data){
  localStorage.setItem('userModel' , JSON.stringify(userModel))
}
public getUserModel():Data | null{
  const userModelString = localStorage.getItem('userModel');
    
    if (userModelString !== null) {
        return JSON.parse(userModelString);
    } else {
        return null; // or handle the absence of 'userModel' differently
    }
}

sendEmailForConfirm(email:any){
  return this.httpService.postRequest('account/SendEmailToResetPassword' , email)
}

submitConfirmationCode(model:any){
  return this.httpService.postRequest('account/ConfirmCodeResetPassword',model)
}

resetPassword(model:
  {
    email: string,
newPassword: string,
confirmNewPassword: string}){
return this.httpService.postRequest('account/ResetPassword' , model)
}
}
