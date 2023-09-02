import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ViewCategoriesComponent } from './components/view-categories/view-categories.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { ViewPlanetComponent } from './components/view-planet/view-planet.component';
import { AdminContainerComponent } from './screens/admin-container/admin-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { SharedModule } from '../shared/shared.module';
import { ButtonComponent } from '../shared/components/button/button.component';


@NgModule({
  declarations: [
    AddCategoryComponent,
    ViewCategoriesComponent,
    AddPlanetComponent,
    ViewPlanetComponent,
    AdminContainerComponent,
    ViewUserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule,ReactiveFormsModule,SharedModule,ButtonComponent
  ]
})
export class AdminModule { }
