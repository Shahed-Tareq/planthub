import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home-app',
  template: `
<section class="mt-6">
  <div class="w-full home-intro">
    <div class="container flex justify-center items-center flex-col">
      <h2 class="text-black mb-3 font-semibold md:text-5xl xxs:text-xl">{{"home.plantCare" | translate}} </h2>
   <p class="md:w-[50%] xs:w-[60%] sm:[60%] text-[#665f5f] font-regular xs:text-sm md:text-base"> {{"home.intro" | translate}}</p>
</div>
</div>
</section>
  <app-home-categories></app-home-categories>
  <app-home-plants></app-home-plants>


<app-suggestions></app-suggestions>
  `,
  styles: [
    `.home-description{
      width:100%;
     background-color:yellow;
      margin: 50px auto;
    
 }
 .home-intro{
      width:100%;
      height:400px;
      margin: 0px auto;
      margin-bottom:20px;
      background-image: url('../../../../assets/images/intro.jpg');
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position:relative;
      display:flex;
 }
 .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Adjust the alpha value (0.5) to control the transparency */
}
 
 `
  ]
})
export class HomeAppComponent implements OnInit {
  ngOnInit(): void {
  
  }

}
