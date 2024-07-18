import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  cards = [

      { title: 'JQuery', imageUrl: 'assets/imagies/jquery.png' },
      { title: 'Bootstrap', imageUrl: 'assets/imagies/bootstrap.png' },
      { title: 'React', imageUrl: 'assets/imagies/react.png' },
      { title: 'Kotlin', imageUrl: 'assets/imagies/kotlin.png' },
      { title: 'Java', imageUrl: 'assets/imagies/java.png' },
    
  ];


  getCards() {
    return this.cards;
  }
}
