import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})
export class UploadPhotoComponent {
  public hasImage:boolean = false;
  public isExist:boolean = false;
  public plantImage:string = ''

 public selectPhoto(event:any){
 this.hasImage = true;
 const file = <File>event.target.files[0];
 var reader = new FileReader();
 reader.onload = (data: any) => {
   this.plantImage = data.target.result;
 };
 reader.readAsDataURL(file);

 }

 public showPlantName(){
  this.isExist = !this.isExist;
 }
}
