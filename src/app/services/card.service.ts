import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards = [
    { title: 'Полный круг услуг', description: 'Проводим полный цикл разработки – от концепции и дизайна до тестирования и поддержки.', imageUrl: 'assets/imagies/card1.png' },
    { title: 'Инновационные решения', description: 'Мы создаем  решения, помогающие вашему бизнесу выделяться в цифровом пространстве.', imageUrl: 'assets/imagies/card2.png' },
    { title: 'Постоянная коммуникация', description: 'Регулярно информируем клиентов о ходе проекта и обеспечиваем открытое взаимодействие на всех этапах разработки.', imageUrl: 'assets/imagies/card3.png' },
    { title: 'Flexibility and scalability', description: 'Our solutions easily adapt to your business growth and changing market requirements.', imageUrl: 'assets/imagies/card4.png' },
    { title: 'Short delivery times', description: 'Optimized development processes allow us to manage time efficiently and deliver projects on schedule.', imageUrl: 'assets/imagies/card5.png' },
  ];

  getCards() {
    return this.cards;
  }
}
