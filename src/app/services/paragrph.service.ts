import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParagrphService {

  paragraphs = [

    { title: 'Performance - маркетинге', color: '#65CA00' },
    { title: 'Web-разработке', color: '#FF9447' },
    { title: 'Аndroid-разработке', color: '#C956FF' },
    { title: 'Business-анализе', color: '#7B81FF' },
    { title: 'Комплексной упаковке', color: '#FF299E' },
  
];


getParagraphs() {
  return this.paragraphs;
}
}
