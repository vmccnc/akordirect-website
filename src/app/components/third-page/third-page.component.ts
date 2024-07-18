import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Service } from 'src/app/interfaces/service.interface';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdPageComponent {
  constructor(private readonly servicesService: ServicesService) {
    this.services = this.servicesService.getServices();
  };
  
  // readonly panelOpenState = signal(false);
  panelOpenState = false;
  services: Service[] = [];
 
  handleDropDownClick(index: number) {
    this.services[index].isExpanded = !this.services[index].isExpanded;
  }

  handleButtonClick(): void {


    // Навигация по якорной ссылке
    const anchor = document.querySelector('#contacts');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  
}
