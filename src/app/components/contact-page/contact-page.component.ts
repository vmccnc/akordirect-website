import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  showMessage: boolean = false;

  checkViber(event: Event) {
    event.preventDefault();

    const viberUrl = "viber://chat?number=%2B1234567890";

    // Попытка открыть Viber
    window.location.href = viberUrl;

    // Задержка для отображения сообщения, если Viber не установлен
    setTimeout(() => {
      this.showMessage = true;
    }, 1000);
  }

  
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
