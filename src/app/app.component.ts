import { Component, Directive, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';
import { FooterHeaderService } from './modules/shared/services/footer-header.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  public footerState$: Observable<boolean> =
    this.showFooterHeaderService.manageFooterStateObs;
  public headerState$: Observable<boolean> =
    this.showFooterHeaderService.manageHeaderStateObs;


  constructor(private translate: TranslateService , public langService: LanguageService , private showFooterHeaderService:FooterHeaderService) {
 }
  ngOnInit(): void {
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      this.langService.setLanguage(storedLang);
    }
  }
}
