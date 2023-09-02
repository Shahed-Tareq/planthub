import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../../home/services/image-service.service';
import { Category } from '../../shared/models/category.model';
import * as Aos from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  
})
export class AboutComponent implements OnInit {

  responsiveOptions:any;
  images:Category[]=[]
  constructor(private imageService: ImageServiceService){

  }

  ngOnInit(): void {
    Aos.init()
    this.imageService.getImages().then((images) => (this.images = images));
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    },
    {
      breakpoint: '400px',
      numVisible: 1,
      numScroll: 1
  }
  ];
  }

  

}
