import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  showMessage: boolean = false;

  @ViewChild('contactForm') contactForm?: ElementRef<HTMLFormElement>;

  handleButtonClick(): void {
    this.contactForm?.nativeElement.submit();
  }

  submitForm(): void {}
}
