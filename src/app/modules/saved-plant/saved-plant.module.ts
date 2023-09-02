import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavedPlantRoutingModule } from './saved-plant-routing.module';
import { SavedPlantComponent } from './screens/saved-plant/saved-plant.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        SavedPlantComponent
    ],
    imports: [
        CommonModule,
        SavedPlantRoutingModule,
        FormsModule,
        TranslateModule,
        SharedModule
    ]
})
export class SavedPlantModule { }
