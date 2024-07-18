import { AfterViewInit, Component, ContentChild, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { TechnologiesService } from 'src/app/services/technologies.service';

@Component({
  selector: 'app-auto-carousel',
  templateUrl: './auto-carousel.component.html',
  styleUrls: ['./auto-carousel.component.scss']
})
export class AutoCarouselComponent implements OnInit, AfterViewInit {
  @Input() items: any[] = [];
  @Input() numberOfItemsShown: number = 3.5; // Default to 3.5 items visible
  @Input() autoScrollInterval: number = 3000; // Default to 3 seconds
  @ContentChild(TemplateRef) template!: TemplateRef<any>;

  currentIndex = 0;
  autoScroll: any;

  ngOnInit() {
    this.startAutoScroll();
  }

  ngAfterViewInit() {
    this.setTransition();
  }

  setTransition() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    if (sliderWrapper) {
      (sliderWrapper as HTMLElement).style.transition = 'transform 0.5s ease';
    }
  }

  startAutoScroll() {
    this.autoScroll = setInterval(() => {
      this.next();
    }, this.autoScrollInterval);
  }

  stopAutoScroll() {
    if (this.autoScroll) {
      clearInterval(this.autoScroll);
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.items.length - this.numberOfItemsShown) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the start
    }
  }
}