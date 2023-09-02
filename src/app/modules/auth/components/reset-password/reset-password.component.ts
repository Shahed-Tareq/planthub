import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { InputPatterns } from 'src/app/modules/shared/utils/validation-pattern';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public resetForm!:FormGroup;
  public submitted:boolean = false;
  public errorMessage:string = '';
  constructor(private _fB: FormBuilder , private authService: AuthService){}

  ngOnInit(): void {
    this.resetForm = this._fB.group(({
      email: ['' , [Validators.required ,Validators.pattern(InputPatterns.emailPattern)]]
    }))

    this.resetForm.get('email')?.valueChanges.subscribe((result:any)=>{
      this.errorMessage = ''
    })
  }

submitForm(){
  this.submitted = true;
  if(this.resetForm.valid){
    this.submitted = false;
    this.authService.sendEmailForConfirm(this.resetForm.value).subscribe((result:any)=>{
      if(!result.isSuccess){
        this.errorMessage = result.message;
      } else{
        // Navigate to next step enter the code: 
      }
    })
   
  }
}


}
