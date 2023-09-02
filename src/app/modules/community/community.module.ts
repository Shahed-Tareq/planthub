import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { CommunityContainerComponent } from './community-container/community-container.component';
import { SharedModule } from '../shared/shared.module';
import { AllpostsComponent } from './components/allposts/allposts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { MypostComponent } from './components/mypost/mypost.component';
import { PostComponent } from './components/post/post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { ButtonComponent } from '../shared/components/button/button.component';


@NgModule({
  declarations: [
    CommunityContainerComponent,
    AllpostsComponent,
    CreatePostComponent,
    MypostComponent,
    PostComponent,
    ViewPostComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule, SharedModule, ButtonComponent
  ]
})
export class CommunityModule { }
