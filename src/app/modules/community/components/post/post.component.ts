import { Component, Input } from '@angular/core';
import { Datum } from '../../models/posts.model';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent{

  @Input() public post !: Datum;
  @Input()short:boolean = true;
  
  constructor(private router:Router , private postService: PostService){}


  viewPostDetails(postId:number){
    this.router.navigate(['community/',postId])

  }
  likePost(postId:any , event:any){
  event.stopPropagation();
  this.postService.addLike(postId).subscribe((result:any)=>{
  if(result.isSuccess){
    this.post.likeCount = this.post.isLiked ? this.post.likeCount-1 : this.post.likeCount+1;
    this.post.isLiked = !this.post.isLiked;
  }
})
  }



}
