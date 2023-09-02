import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AiRoutingModule } from './ai-routing.module';
import { UploadPhotoComponent } from './components/upload-photo/upload-photo.component';
import { SharedModule } from '../shared/shared.module';
import { ButtonComponent } from '../shared/components/button/button.component';



@NgModule({
  declarations: [
    UploadPhotoComponent
  ],
  imports: [
    CommonModule,
    AiRoutingModule,SharedModule,
    ButtonComponent
  ]
})
export class AiModule { }
