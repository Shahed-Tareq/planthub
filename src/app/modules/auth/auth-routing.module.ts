import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignupConfirmationComponent } from './components/signup-confirmation/signup-confirmation.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ConfirmEmailComponent } from './components/reset-journey/confirm-email/confirm-email.component';
import { ConfirmCodeComponent } from './components/reset-journey/confirm-code/confirm-code.component';
import { ResetPasswordFormComponent } from './components/reset-journey/reset-password-form/reset-password-form.component';

const routes: Routes = [
{path:'' , component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  {path:'confirm' , component:SignupConfirmationComponent},
  {path:'',component: ResetPasswordComponent ,children:[
    {path: 'reset-password' , component: ConfirmEmailComponent},
    {path: 'confirm-code' , component: ConfirmCodeComponent},
    {path: 'reset-password-form' , component: ResetPasswordFormComponent}

  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
