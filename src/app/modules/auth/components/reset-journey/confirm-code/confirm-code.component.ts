import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-code',
  templateUrl: './confirm-code.component.html',
  styleUrls: ['./confirm-code.component.scss']
})
export class ConfirmCodeComponent implements OnInit{

  public codeForm!:FormGroup;
 public errorMessage!:string;
 public submitted:boolean = false;
 private emailUser:any;
 public loading:boolean = false;
  constructor(private _fB:FormBuilder , private authService: AuthService , private router:Router){}

  ngOnInit(): void {
   this.codeForm = this._fB.group(({
    code: ['' , Validators.required]
   }))

   if(localStorage.getItem('email')){
    this.emailUser = localStorage.getItem('email')
   }

  this.codeForm.get('code')?.valueChanges.subscribe((result:any)=>{
    this.errorMessage = ''
  })
  }
  submitCode(){
 this.submitted = true;
 this.loading = true;
 if(this.codeForm.valid){
  this.submitted = false;
this.authService.submitConfirmationCode({email: this.emailUser , code:+this.codeForm.get('code')?.value}).subscribe((result:any)=>{
if(result.isSuccess){
  this.router.navigate(['auth/reset-password-form'])
} else{
  this.errorMessage = result?.message;
}
})
 }
 this.loading = false;
  }
}
