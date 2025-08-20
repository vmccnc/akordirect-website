import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParagrphService {

  paragraphs = [

    { key: 'MAIN.SUBTITLE.1', color: '#65CA00' },
    { key: 'MAIN.SUBTITLE.2', color: '#FF9447' },
    { key: 'MAIN.SUBTITLE.3', color: '#C956FF' },
    { key: 'MAIN.SUBTITLE.4', color: '#7B81FF' },
    { key: 'MAIN.SUBTITLE.5', color: '#FF299E' },
  
];


getParagraphs() {
  return this.paragraphs;
}
}
