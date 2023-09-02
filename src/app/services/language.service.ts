import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private _currentLang: string = 'en';
  direction: string = 'ltr';
  languageChange: Subject<string> = new Subject<string>();

  constructor(private translate: TranslateService) {}

  setLanguage(lang: string) {
    this._currentLang = lang;
    this.translate.use(lang);
    this.updateDirection();
    localStorage.setItem('lang', lang);
    this.languageChange.next(lang); // Notify about direction change
  }

  private updateDirection() {
    this.direction = (this._currentLang === 'ar') ? 'rtl' : 'ltr';
  }

}
