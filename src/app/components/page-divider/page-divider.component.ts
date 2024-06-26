import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-divider',
  templateUrl: './page-divider.component.html',
  styleUrls: ['./page-divider.component.scss']
})
export class PageDividerComponent {
  @Input() pageNumber: string = '';
  isOddPage: boolean = true;

  ngOnInit(): void {
    this.isOddPage = Number(this.pageNumber) % 2 !== 0;
  }
}
