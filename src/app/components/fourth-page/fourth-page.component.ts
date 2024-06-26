import { Component } from '@angular/core';
import { Card } from 'src/app/interfaces/card.interface';
import { TechnologiesService } from 'src/app/services/technologies.service';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.scss']
})
export class FourthPageComponent {

  cards: { [key: string]: Card[] } = {};
  categories: string[] = [];
  selectedCategory: string;

  constructor(private readonly technologiesService: TechnologiesService){
    this.cards = this.technologiesService.getCards();
    this.categories = this.technologiesService.getCategories();
    this.selectedCategory = this.categories[0];
  };
}
