import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  
  handleButtonClick(): void {
    // Отправка формы (если это необходимо)
    this.submitForm();

    // // Навигация по якорной ссылке
    // const anchor = document.querySelector('#yourAnchorId');
    // if (anchor) {
    //   anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // }
  }
  submitForm(): void {
    // Ваш код для отправки формы
    // Например, используя Angular Forms или JavaScript для отправки AJAX запроса
  }
}
