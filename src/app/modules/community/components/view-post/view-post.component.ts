import { Component ,OnInit} from '@angular/core';
import { Datum, Posts , Comment} from '../../models/posts.model';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit  {
  public post!:Datum;
  public content!:string;
  public comments!:Comment[]
  constructor( private activatedRoute: ActivatedRoute , private postService: PostService){
    this.activatedRoute.params.subscribe((result:any)=>{
      const id = result['id']
      this.getPostById(id)
    })

  }
  ngOnInit(): void {
    
  }
getPostById(postId:number){
this.postService.getPostById(postId).subscribe((result:Posts)=>{
  if(result.isSuccess){
    this.post = result.data[0];
    this.comments = result.data[0]?.comments;
  }
 
})
}

  
addComment(postId:number){
this.postService.addComment({'postId':postId , 'content':this.content} ).subscribe((result:any)=>{
this.content = ''
  this.getPostById(postId)
})
}
  
}
