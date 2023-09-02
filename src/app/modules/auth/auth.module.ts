import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ButtonComponent } from '../shared/components/button/button.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignupConfirmationComponent } from './components/signup-confirmation/signup-confirmation.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ConfirmEmailComponent } from './components/reset-journey/confirm-email/confirm-email.component';
import { ConfirmCodeComponent } from './components/reset-journey/confirm-code/confirm-code.component';
import { ResetPasswordFormComponent } from './components/reset-journey/reset-password-form/reset-password-form.component';



@NgModule({
  declarations: [
LoginComponent, SignupComponent , SignupConfirmationComponent, ResetPasswordComponent, ConfirmEmailComponent, ConfirmCodeComponent, ResetPasswordFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,SharedModule,ButtonComponent
  ]
})
export class AuthModule { }
