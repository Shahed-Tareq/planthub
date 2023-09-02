import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserDetails, UserResponse } from '../../models/user-details.model';
import { ColDef, GridOptions } from 'ag-grid-community';
import { AddUserComponent } from '../add-user/add-user.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
  providers:[DialogService , MessageService]
})
export class ViewUserComponent implements OnInit{
  rowData:UserDetails[] = [];
  columnDefs: ColDef[] =[]
  ref: DynamicDialogRef | undefined;
  constructor(private userService: UserService , private dialogService: DialogService , private messageService: MessageService){}
  ngOnInit(): void {
    this.getAllUsers();
    this.columnInitialization()
  }
  removeUser(userId:any){
this.userService.removeUser(userId.toString()).subscribe((result:any)=>{
  this.rowData = this.rowData.filter(item => item.id !== userId);
})
  }

  showAddUser(){
    this.ref = this.dialogService.open(AddUserComponent, { header: 'add User' , styleClass:'addCategory'});
    this.ref.onClose.subscribe((user: any) => {
      if (user) {
         this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Adding Successfully' });
         this.getAllUsers()
      }
  });
  }
  getAllUsers(){
    this.userService.getAllUsers().subscribe((result:UserResponse)=>{
      this.rowData=  result.data;
    })
  }

 public columnInitialization(){
    this.columnDefs = [
      {field:'#' , width:60 , valueGetter: 'node.rowIndex + 1'},
      {field:'fullName' , headerName:'Full Name' , sortable:true , filter:true ,headerClass:'header-class' , flex:1},
      {field:'email' , headerName:'Email' , sortable:true , filter:true ,headerClass:'header-class' , flex:1},
      {field:'userType' , headerName:'User Type' , sortable:true , filter:true ,headerClass:'header-class' , flex:1},
      {field:'image' , headerName:'Plant Image'  ,headerClass:'header-class' , flex:1 , cellRenderer:function(params:any){
      return `<img src="http://ayalilly-001-site1.atempurl.com/${params.value}" width="50px" hight="50px">`
      }},
      {field:'action' , headerName:'Actions'  ,headerClass:'header-class' , flex:1},
    ]
  }

  gridOptions:GridOptions<any> = {
      rowSelection: 'multiple',
      domLayout: 'autoHeight',
      pagination: true,
      paginationPageSize: 10,
      overlayLoadingTemplate: `<span> Loading ... </span>`,
    };

}
