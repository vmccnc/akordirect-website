import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards = [
    { title: 'ADVANTAGES.FULL_CYCLE', description: 'ADVANTAGES.FULL_CYCLE_DESC', imageUrl: 'assets/imagies/card1.png' },
    { title: 'ADVANTAGES.INNOVATION', description: 'ADVANTAGES.INNOVATION_DESC', imageUrl: 'assets/imagies/card2.png' },
    { title: 'ADVANTAGES.COMMUNICATION', description: 'ADVANTAGES.COMMUNICATION_DESC', imageUrl: 'assets/imagies/card3.png' },
    { title: 'ADVANTAGES.FLEXIBILITY', description: 'ADVANTAGES.FLEXIBILITY_DESC', imageUrl: 'assets/imagies/card4.png' },
    { title: 'ADVANTAGES.SPEED', description: 'ADVANTAGES.SPEED_DESC', imageUrl: 'assets/imagies/card5.png' },
  ];

  getCards() {
    return this.cards;
  }
}
