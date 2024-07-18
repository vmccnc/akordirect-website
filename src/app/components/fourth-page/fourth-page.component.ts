import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card.interface';
import { TechnologiesService } from 'src/app/services/technologies.service';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.scss']
})
export class FourthPageComponent implements OnInit {
  cards: any[] = [];

  constructor(private techService: TechnologiesService) {}

  ngOnInit() {
    this.cards = this.techService.getCards();
  }
}