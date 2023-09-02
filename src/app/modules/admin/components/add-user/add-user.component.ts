import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent  implements OnInit{
 userForm!:FormGroup;
 public hasImage:boolean = false;
 public isExist:boolean = false;
 public userImage:any;
 public uploadedImage:any;
  constructor(private ref: DynamicDialogRef ,private _fB:FormBuilder , private adminService: AdminService){}

  ngOnInit(): void {
    this.formInitialization()
  }
  public formInitialization(){
    this.userForm = this._fB.group({
      fullName: [''],
      username: [''],
      phone:[''],
      password:[''],
      userType:[''],
      email:['']
    })
  }


  public selectPhoto(event:any){
    this.hasImage = true;
    const file = <File>event.target.files[0];
    this.uploadedImage = file;
    var reader = new FileReader();
    reader.onload = (data: any) => {
     this.userImage = data.target.result;
    };
    reader.readAsDataURL(file);
    
    }

    addUser(){
      const formData = new FormData();
     if(this.userForm.valid){
      const userForm = this.userForm.value;
      formData.append('FullName' , userForm.fullName )
      formData.append('UserName' , userForm.username )
      formData.append('Email' , userForm.email )
   formData.append('UserType' , userForm.userType )
   formData.append('PhoneNumber' , userForm.phone )
   formData.append('Password' , userForm.password )
   formData.append('ImageFile' , this.uploadedImage )

   this.adminService.addUser(formData).subscribe((result:any)=>{
    if(result.isSuccess){
      this.userForm.reset();
      this.hasImage = false;
      this.ref.close(userForm);
    }
   })
     }
    }
    public userTypesArray = [
      {label: 'Admin' , id: 3},
      {label: 'regular user' , id: 2}
    ]
}
