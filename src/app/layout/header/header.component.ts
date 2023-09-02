import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { LanguageService } from 'src/app/services/language.service';
import { TranslationService } from 'src/app/services/translation.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideDown', [
      state('void', style({ top: '-100%' })),
      state('*', style({ top: 56 })),
      transition('void => *', animate('600ms ease-out')),
      transition('* => void', animate('600ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements OnInit{
  items!:any[];
  userType!:any;
  @ViewChild('op') overlayPanel!: OverlayPanel;
  constructor(private translate: TranslateService , private langService: LanguageService , public authService:AuthService , private translationService: TranslationService){}
  
  ngOnInit(): void {
    this.userType = localStorage.getItem('userTypeForNavBar') ? localStorage.getItem('userTypeForNavBar') : 4;
   
    this.translate.onLangChange.subscribe(async (event) => {
      this.changeHeaderLang()
    });
    this.changeHeaderLang()
  }
public showItemList:boolean = false;

public showItem(){
  this.showItemList = !this.showItemList;
}

useLanguage(language: string , direction:string): void {
  this.langService.setLanguage(language);
  this.overlayPanel.hide();
}

changeHeaderLang(){
  const home = this.translationService.getTranslation('header.home');
  const about = this.translationService.getTranslation('header.about');
  const categories = this.translationService.getTranslation('header.categories');
  const upload = this.translationService.getTranslation('header.upload');
  const community = this.translationService.getTranslation('header.community');
  const adminCategory = this.translationService.getTranslation('header.categories');
  const plants = this.translationService.getTranslation('header.plants');
  const users = this.translationService.getTranslation('header.users');
  const favorite = this.translationService.getTranslation('header.favorite');
  const items = [home , about , categories , upload ,community,favorite,adminCategory , plants, users]
  this.initializationSteps(items);



}
private initializationSteps(items:any[]){
  this.items = [
    {label: items[0] , url:'/' , userTyp: 4},
    {label: items[1] , url:'/about' , userTyp: 4},
    {label: items[2] , url:'/categories' , userTyp: 4},
    {label: items[3] , url:'/ai' , userTyp: 4},
    {label: items[4] , url:'community' , userTyp: 4},
    {label: items[5] , url:'saved' , userTyp: 4},
    {label: items[6] , url:'/admin/viewCategory' , userTyp: 3},
    {label: items[7] , url:'/admin/viewPlant' , userTyp: 3},
    {label: items[8] , url:'/admin/viewUser' , userTyp: 3},
  ]
}

}
