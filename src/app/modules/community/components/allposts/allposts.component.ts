import { Component, OnInit } from '@angular/core';
import {  Datum, Posts } from '../../models/posts.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.scss']
})
export class AllpostsComponent implements OnInit{
  constructor(private postService: PostService){}

posts!:Datum[];

ngOnInit(): void {
this.getAllPosts();
}


private getAllPosts(){
this.postService.getAllPosts().subscribe((result:Posts)=>{
if(result.isSuccess){
  this.posts =  result.data;
}
})
}

}
