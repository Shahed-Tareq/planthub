import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityContainerComponent } from './community-container/community-container.component';
import { AllpostsComponent } from './components/allposts/allposts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { MypostComponent } from './components/mypost/mypost.component';
import { ViewPostComponent } from './components/view-post/view-post.component';

const routes: Routes = [
  {path:'' , component:CommunityContainerComponent , children:[
    {path: '' , component:AllpostsComponent , pathMatch:'full'},
    {path: 'addPost' , component:CreatePostComponent, pathMatch:'full'},
    {path: 'myPost' , component:MypostComponent,pathMatch:'full'},
    {path: ':id' , component: ViewPostComponent}
  ]} ,
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
