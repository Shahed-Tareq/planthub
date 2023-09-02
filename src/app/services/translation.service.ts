import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translateService:TranslateService) { }

  public getTranslation(key: string): string {
    return this.translateService.instant(key);
  }
}
