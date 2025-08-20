import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss', './layout-media.component.scss']
})
export class LayoutComponent implements OnInit{
  selectedLang = 'en';  
  languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'pl', label: 'Polski', flag: '🇵🇱' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  ];

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.language$.subscribe(lang => this.selectedLang = lang);
    this.translationService.setLanguage(this.selectedLang);
  }

  changeLang(lang: string) {
    this.translationService.setLanguage(lang);

  }
}
