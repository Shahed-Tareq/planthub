import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-confirmation',
  templateUrl: './signup-confirmation.component.html',
  styleUrls: ['./signup-confirmation.component.scss']
})
export class SignupConfirmationComponent implements OnInit {
public code!:number;
public email!:string;
public errorMessage!:string;
constructor(private authService: AuthService , private router: Router){}
  ngOnInit(): void {
    const result = localStorage.getItem('userData');
    if(result){
    const userData = JSON.parse(result)
    this.email = userData?.email;
   }
  }

confirmEmail(){
  this.authService.confirmEmail({confirmationCode:this.code , email: this.email}).subscribe((result:any)=>{
  if(result.isSuccess){
    this.router.navigate(['auth'])
  } else{
this.errorMessage = result.message;
  }
  })
}
}
