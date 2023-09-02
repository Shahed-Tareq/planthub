import { Component  , Input, OnInit} from '@angular/core';
import { ImageServiceService } from '../services/image-service.service';
import { Category } from '../../shared/models/category.model';

@Component({
  selector: 'app-gallary',
  template: `
<div class="w-full h-[80vh]">
  <img [src]="image.itemImageSrc" class="w-full h-full object-cover">
</div>
  `,
  styles: [
  ]
})
export class GallaryComponent implements OnInit {
  
  // Declaration
 @Input() image!:Category;

  constructor(){

  }
  ngOnInit(): void {
   

  }



}
