import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedPlantComponent } from './screens/saved-plant/saved-plant.component';

const routes: Routes = [
  {path:'' , component:SavedPlantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavedPlantRoutingModule { }
