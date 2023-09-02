import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequestsService } from 'src/app/services/http-requests.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpRequestService: HttpRequestsService) { }

  public createPost(postModel:any){
  return this.httpRequestService.postRequest('Post/CreatePost' , postModel)
  }

  public getAllPosts(){
    return this.httpRequestService.getRequest('Post/GetAllPost')
  }

getAllPostByUserId(){
  return this.httpRequestService.getRequest('Post/GetAllPostByUserId');
}
getPostById(postId:number){
  return this.httpRequestService.getRequest('Post/GetPostById' , {
    params: {
      postId: postId,
    }})
}

public addComment(model:any){
 return this.httpRequestService.postRequest('Post/AddComment' , model)
}

public addLike(postId:any){
return this.httpRequestService.postRequest('Post/AddLike' , postId)
}
}
