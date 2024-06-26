import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdPageComponent {
  readonly panelOpenState = signal(false);
}
