import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputPatterns } from 'src/app/modules/shared/utils/validation-pattern';
import { passwordValidator } from '../../../utils/password-validation';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit{
  
  constructor(private router:Router , private authService: AuthService , private _fB: FormBuilder){}
  
  public passwordForm!:FormGroup;
  public email!:string;
  public submitted:boolean = false;
  public loading:boolean = false;
  ngOnInit(): void {
   this.passwordForm = this._fB.group({
    password: ['' , [Validators.required , Validators.pattern(InputPatterns.passwordPattern)]],
    confirmationPassword:['']
   } ,{ validator: [passwordValidator] })

   const result = localStorage.getItem('userData')
   if(result){
   this.email = JSON.parse(result).email;
   }
  }

  resetPassword(){
    this.submitted = true;
    this.loading = true;
    const resetForm = this.passwordForm.value;
  if(this.passwordForm.valid){
    this.authService.resetPassword({
      email: this.email,
  newPassword: resetForm.password,
  confirmNewPassword: resetForm.confirmationPassword}).subscribe((result:any)=>{
 if(result.isSuccess){
  this.router.navigate(['auth'])
 }
  })
  }
  this.loading = false;

   }
   
  
}
