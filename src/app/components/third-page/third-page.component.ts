import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdPageComponent {
  readonly panelOpenState = signal(false);
  
  handleButtonClick(): void {


    // Навигация по якорной ссылке
    const anchor = document.querySelector('#contacts');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
