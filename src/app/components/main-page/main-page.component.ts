import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ParagrphService } from 'src/app/services/paragrph.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  paragraphs: any[] = [];
  currentIndex = 0;
  intervalId: any;

  constructor(private paragraphService: ParagrphService) {}
  
  
    ngOnInit() {
      this.paragraphs = this.paragraphService.getParagraphs();
      this.startInterval();
    }
  
    ngOnDestroy() {
      clearInterval(this.intervalId);
    }

  
    startInterval() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.paragraphs.length;
      }, 3000);
    }
  
    get currentParagraph() {
      return this.paragraphs[this.currentIndex];
    }
  

  handleButtonClick(): void {


    // Навигация по якорной ссылке
    const anchor = document.querySelector('#contacts');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
