import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../../models/login.model';
import { userType } from 'src/app/modules/shared/enums/user-type.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public isLoading:boolean = false;
  public submitted:boolean = false;
  public loginForm!:FormGroup;
  public errorMessage!:string;
 
  constructor(private authService:AuthService , private router: Router , private _fB:FormBuilder){
   if( this.authService.loggedIn()){
    this.router.navigate(['/'])
    return;
   }
  }
  ngOnInit(): void {
    this.loginForm = this._fB.group ({
      Email: new FormControl('' , Validators.required),
      Password: new FormControl('' , Validators.required)
    })
  }

  public login(){
    this.submitted = true;
    this.isLoading = true;
    if(this.loginForm.valid){
      this.submitted = false;
     this.authService.login(this.loginForm.value).subscribe((result:LoginResponse)=>{
        if(result.isSuccess){
             localStorage.setItem('userData' , JSON.stringify(result.data ))
          if(result.data.isEmailConfirm){
            localStorage.setItem('token' , result.data.token)
            this.authService.storeUserModel(result.data)
            localStorage.setItem('userType' ,JSON.stringify(result.data.userType))
            if(result.data.userType === userType.farmer || result.data.userType== userType.regularUser){
              localStorage.setItem('userTypeForNavBar' , '4')
            } else{
              localStorage.setItem('userTypeForNavBar' , JSON.stringify(result.data.userType))
            }
           
            this.authService.redirectionType(result.data.userType)
          } else{
            this.router.navigate(['/auth/confirm'])
          }
        
          this.isLoading = false;
         } else{
          this.isLoading = false;
          this.errorMessage = result?.message;
         }
     },
     (error)=>{
      this.isLoading = false;
    })
    } 
  }

}
