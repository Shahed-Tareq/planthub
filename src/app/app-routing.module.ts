import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './modules/core/guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './modules/core/interceptors/auth.interceptor';
import { adminGuard } from './modules/core/guards/admin.guard';
import { regulrUserGuard } from './modules/core/guards/regulr-user.guard';

const routes: Routes = [
  {
    path: 'categories',
    loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'community',
    canActivate: [authGuard , regulrUserGuard],
    loadChildren: () => import('./modules/community/community.module').then(m => m.CommunityModule)
  },
  {
    path: 'ai',
    canActivate: [authGuard , regulrUserGuard],
    loadChildren: () => import('./modules/ai/ai.module').then(m => m.AiModule)
  },
  {
    path: 'plant',
    loadChildren: () => import('./modules/plants/plants.module').then(m => m.PlantsModule)
  },
  {
    path: 'admin',
    canActivate: [authGuard , adminGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'saved',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/saved-plant/saved-plant.module').then(m => m.SavedPlantModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
     multi:true
    }
  ]
})
export class AppRoutingModule { }
