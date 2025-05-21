import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor(private langService: LanguageService) {}

  setLang(lang: 'ru' | 'en') {
    this.langService.setLanguage(lang);
  }
}
