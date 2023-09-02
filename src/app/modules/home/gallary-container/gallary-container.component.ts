import { Component , OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from '../../shared/models/category.model';
import { ImageServiceService } from '../services/image-service.service';

@Component({
  selector: 'app-gallary-container',
  template: `
  <owl-carousel-o [options]="customOptions">
  <ng-container *ngFor="let slide of Sliders">
      <ng-template carouselSlide id="{{slide.id}}">
        <!-- <img [src]="slide.itemImageSrc" [alt]="slide.alt" [title]="slide.title"> -->
        <app-gallary [image]="slide"> </app-gallary>
      </ng-template>
    </ng-container>
  </owl-carousel-o>
  `,
  styles: [
  ]
})
export class GallaryContainerComponent implements OnInit {
  public Sliders:Category[] = [];

  constructor(private imageService:ImageServiceService){

  }
  ngOnInit(): void {
    this.imageService.getImages().then((data)=>{
      this.Sliders = data
    })
  }


  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000, // Adjust this value as per your requirement
    autoplayHoverPause: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true, // Enable navigation arrows
  }
}
