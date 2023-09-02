import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';
import { CategoryPlantsComponent } from './category-plants/category-plants.component';

const routes: Routes = [
  {path: '' ,  component:ViewCategoriesComponent},
  {path: ':id' ,  component:CategoryPlantsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
