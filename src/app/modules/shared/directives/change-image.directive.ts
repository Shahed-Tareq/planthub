import { Directive, HostListener , ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeImage]'
})
export class ChangeImageDirective {

  constructor(private element:ElementRef) { }
  @HostListener('click')
  changeImage(){
    var src:any = this.element.nativeElement.src
    var preview:any = document.getElementById('preview')
    var imageSlide = document.getElementsByClassName('image-slide');
    for (let i = 0 ; i<imageSlide.length ; i++){
      imageSlide[i].classList.remove("active")
    }
    preview.src = src
    this.element.nativeElement.parentElement.classList.add('active')
  }

}
