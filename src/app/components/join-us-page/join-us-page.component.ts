import { Component } from '@angular/core';

@Component({
  selector: 'app-join-us-page',
  templateUrl: './join-us-page.component.html',
  styleUrls: ['./join-us-page.component.scss']
})
export class JoinUsPageComponent {
  items = [
    'Прохождение стажировки в режиме реальных проектов.',
    'Возможность работать над захватывающими проектами в нашей IT-компании.',
    'Дружный коллектив единомышленников.',
    'Профессиональное развитие и обучение.'
  ];
}
