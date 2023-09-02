import { Component , OnInit } from '@angular/core';
import { Plant } from '../../shared/models/plants.model';
import { Datum, Posts } from '../models/posts.model';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-community-container',
  templateUrl: './community-container.component.html',
  styleUrls: ['./community-container.component.scss']
})
export class CommunityContainerComponent implements OnInit{
posts!:Datum[]
plants:Plant[] = [];
constructor(private postService:PostService){}

  ngOnInit(): void {
    this.getAllPlants();
    this.getTopPosts()
 }




 private getAllPlants(){
this.plants = [
  {_id: 1 , name: 'Orange'},
  {_id: 2 , name: 'Apple'},
  {_id: 3 , name: 'Banana'},
  {_id: 4 , name: 'Banana'},
  {_id: 5 , name: 'Orange'},
  {_id: 6 , name: 'Orange'},
  {_id: 7 , name: 'Orange'},
  {_id: 8 , name: 'Apple'},
  {_id: 9 , name: 'Orange'},
  {_id: 10 , name: 'Orange'},
  {_id: 12 , name: 'Orange'},
  {_id: 13, name: 'Orange'},
  {_id: 14 , name: 'Orange'},
  {_id: 15 , name: 'Orange'},
  {_id: 16 , name: 'Orange'},
  {_id: 17 , name: 'Orange'},
  {_id: 18 , name: 'Orange'},
  {_id: 19 , name: 'Orange'},
  {_id: 20 , name: 'Orange'},
  {_id: 21 , name: 'Orange'},
  {_id: 22 , name: 'Orange'},

]
  }


getTopPosts(){
this.postService.getAllPosts().subscribe((result:Posts)=>{
this.posts= result.data;
})
}

}
