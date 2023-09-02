import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { InputPatterns } from 'src/app/modules/shared/utils/validation-pattern';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {
  public resetForm!:FormGroup;
  public submitted:boolean = false;
  public errorMessage:string = '';
  public loading:boolean = false;
  constructor(private _fB: FormBuilder , private authService: AuthService , private router: Router){}

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
  this.loading = true;
  if(this.resetForm.valid){
    this.submitted = false;
    this.authService.sendEmailForConfirm(this.resetForm.value).subscribe((result:any)=>{
      if(!result.isSuccess){
        this.errorMessage = result.message;
      } else{
        // Navigate to next step enter the code:
        localStorage.setItem('email' , this.resetForm.get('email')?.value)
       this.router.navigate(['auth/confirm-code'])
      }
    })
   
  }
  this.loading = false;
}

}
