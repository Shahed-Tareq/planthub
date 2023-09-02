import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeRoutingModule } from './home-routing.module';
import { HomeAppComponent } from './home-app/home-app.component';
import { GallaryComponent } from './gallary/gallary.component';
import { SharedModule } from '../shared/shared.module';
import { HomeCategoriesComponent } from './home-categories/home-categories.component';
import { HomePlantsComponent } from './home-plants/home-plants.component';
import { GallaryContainerComponent } from './gallary-container/gallary-container.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { ButtonComponent } from '../shared/components/button/button.component';


@NgModule({
  declarations: [
    HomeAppComponent,
    GallaryComponent,
    HomeCategoriesComponent,
    HomePlantsComponent,
    GallaryContainerComponent,
    SuggestionsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,CarouselModule,ButtonComponent
  ],
  exports:[
    GallaryComponent,
    HomeAppComponent,HomeCategoriesComponent,GallaryContainerComponent
  ]
})
export class HomeModule { }
