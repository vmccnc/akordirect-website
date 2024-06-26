import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards = [
    { title: 'Полный круг услуг', description: 'Проводим полный цикл разработки – от концепции и дизайна до тестирования и поддержки.', imageUrl: 'assets/imagies/card1.png' },
    { title: 'Инновационные решения', description: 'Мы создаем  решения, помогающие вашему бизнесу выделяться в цифровом пространстве.', imageUrl: 'assets/imagies/card2.png' },
    { title: 'Постоянная коммуникация', description: 'Регулярно информируем клиентов о ходе проекта и обеспечиваем открытое взаимодействие на всех этапах разработки.', imageUrl: 'assets/imagies/card3.png' },
    { title: 'Гибкость и масштабируемость', description: 'Наши решения легко адаптируются в соответствии с ростом вашего бизнеса и изменяющимися требованиями рынка.', imageUrl: 'assets/imagies/card4.png' },
    { title: 'Краткие сроки выполнения', description: 'Оптимизированные процессы разработки позволяют нам эффективно управлять временем и сдавать проекты точно в срок.', imageUrl: 'assets/imagies/card5.png' },
  ];

  getCards() {
    return this.cards;
  }
}
