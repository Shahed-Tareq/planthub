import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  public postForm!:FormGroup;
  public postImage:any;
  public postShowImage:any;
  public hasImage:boolean = false;
  public loading:boolean = false;
  constructor(private router:Router , private postService: PostService , private _fB: FormBuilder){

  }
  ngOnInit(): void {
    this.initializationForm()
  }


  public addPost():void{
    this.loading = true;
    const formData = new FormData;
    formData.append('Title' , this.postForm.get('Title')?.value)
    formData.append('Content' , this.postForm.get('Content')?.value)
    formData.append('ImageFile' , this.postImage)
    this.postService.createPost(formData).subscribe((result:any)=>{
      if(result && result.isSuccess){
        this.router.navigate(['community/myPost'])
      }
      this.loading = false;
    })
    
  }

  private initializationForm(){
    this.postForm = this._fB.group(({
      Title: [''],
      Content:[''],
      ImageFile:[]
    }))
  }

  public selectPhoto(event:any){
    this.hasImage = true;
    const file = <File>event.target.files[0];
    this.postImage = file;
    var reader = new FileReader();
    reader.onload = (data: any) => {
     this.postShowImage = data.target.result;
    };
    reader.readAsDataURL(file);
    
    }
}
