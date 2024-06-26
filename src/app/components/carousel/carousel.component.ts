import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() items: any[] = [];
  @Input() numberOfCardsShown!: number;
  @ContentChild(TemplateRef) template!: TemplateRef<any>;

  currentIndex = 0;

  prev() {
    debugger;
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.items.length - this.numberOfCardsShown) {
      this.currentIndex++;
    }
  }
}
