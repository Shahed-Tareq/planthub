import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContainerComponent } from './screens/admin-container/admin-container.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { ViewPlanetComponent } from './components/view-planet/view-planet.component';
import { ViewCategoriesComponent } from './components/view-categories/view-categories.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  {path:'' , component:AdminContainerComponent , children:[
    {path: '' , redirectTo:'addCategory' , pathMatch:'full'},
    {path:'addCategory' , component:AddCategoryComponent},
    {path:'addPlant' , component:AddPlanetComponent},
    {path:'viewCategory' , component:ViewCategoriesComponent},
    {path:'viewPlant' , component:ViewPlanetComponent},
    {path:'viewUser' , component:ViewUserComponent},
    {path: 'addUser' , component: AddUserComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
