import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {
  cards: Project[] = [];

  constructor(private readonly cardService: CardService){
    this.cards = this.cardService.getCards();
  };

}
