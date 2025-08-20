import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import ru from '../../assets/i18n/ru.json';
import en from '../../assets/i18n/en.json';
import pl from '../../assets/i18n/pl.json';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: { [key: string]: any } = {
    ru, en, pl
  };
  private currentLang = new BehaviorSubject<string>('en');
  language$ = this.currentLang.asObservable();

  constructor() {}

  setLanguage(lang: string) {
    this.currentLang.next(lang);
  }

  translate(key: string): string {
    const lang = this.currentLang.getValue();
    return this.translations[lang]?.[key] || key;
  }
}
