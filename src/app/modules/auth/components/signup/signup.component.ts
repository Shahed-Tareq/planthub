import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputPatterns } from 'src/app/modules/shared/utils/validation-pattern';
import { AuthService } from '../../services/auth.service';
import { LoaderComponent } from 'src/app/modules/shared/components/loader/loader.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
public submitted:boolean = false;
userImage:any;
signupForm!:FormGroup;
public loading:boolean = false;
imageForm!:FormGroup;
public hasImage:boolean = false;
public isExist:boolean = false;
public plantImage:string = ''

constructor(private router:Router , private fb:FormBuilder , private authService: AuthService){
  
}
ngOnInit(): void {
this.signupFormInitialization()
 }

public signup(){
  this.submitted = true;
  this.loading = true;
  if(this.signupForm.valid){
  const userData = this.signupForm.value;
    this.submitted = false;
    const formData: FormData = new FormData();
    formData.append('FullName',userData?.name);
    formData.append('Password', userData?.password);
    formData.append('UserType','2');
    formData.append('Email', userData?.email);
    formData.append('PhoneNumber', userData?.phone);
    formData.append('UserName', userData?.userName);
    formData.append('ImageFile', this.userImage);
    this.authService.signUp(formData).subscribe((result:any)=>{
if(result.isSuccess){
  localStorage.setItem('email' ,  userData?.email)
  this.router.navigate(['/auth/confirm'])
  this.loading = false;
} else{
  this.loading = false;
}
}, (error) => {
  console.error('An error occurred:', error);
  this.loading = false;
})}
}



public selectPhoto(event:any){
this.hasImage = true;
const file = <File>event.target.files[0];
this.userImage = file;
var reader = new FileReader();
reader.onload = (data: any) => {
 this.plantImage = data.target.result;
};
reader.readAsDataURL(file);

}

private signupFormInitialization():void{
  this.signupForm = new FormGroup ({
    email: new FormControl('' , [Validators.required , Validators.pattern(InputPatterns.emailPattern)]),
    password: new FormControl('' , [Validators.required, Validators.pattern(InputPatterns.passwordPattern) ]),
    name: new FormControl('ff' , Validators.required),
    phone: new FormControl('' , [Validators.required , Validators.pattern(InputPatterns.numberPattern)]),
    userName: new FormControl('' , Validators.required),
    userImage: new FormControl('')
    
  })
}

}
