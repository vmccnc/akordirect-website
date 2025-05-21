import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects = [
    { title: 'www.sofantastica.pl', description: 'Sofa, armchirs', imageUrl: 'assets/imagies/sof.jpg' },
    { title: 'www.salivonchyk.pl', description: 'Horses farm', imageUrl: 'assets/imagies/saliv.jpg' },
    { title: 'www.insaturbo4x4.com', description: 'Tires', imageUrl: 'assets/imagies/tires.jpg' },
    { title: 'www.get-together.events', description: 'Meetings with friends', imageUrl: 'assets/imagies/meetings.jpg' },
    { title: 'https://english-katt.vercel.app/', description: 'Learn English', imageUrl: 'assets/imagies/english.jpg' },
    { title: 'Проект', description: 'Описание', imageUrl: 'assets/imagies/project1.png' },
    { title: 'Проект', description: 'Описание', imageUrl: 'assets/imagies/project1.png' },
    { title: 'Проект', description: 'Описание', imageUrl: 'assets/imagies/project1.png' },
    { title: 'Проект', description: 'Описание', imageUrl: 'assets/imagies/project1.png' },
  ];

  getProjects() {
    return this.projects;
  }
}
