import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects = [
    { title: 'Проект', description: 'Описание', imageUrl: 'assets/imagies/project1.png' },
    { title: 'Проект', description: 'Описание', imageUrl: 'assets/imagies/project1.png' },
    { title: 'Проект', description: 'Описание', imageUrl: 'assets/imagies/project1.png' },
    { title: 'Проект', description: 'Описание', imageUrl: 'assets/imagies/project1.png' },
    { title: 'Проект', description: 'Описание', imageUrl: 'assets/imagies/project1.png' },
    { title: 'Проект', description: 'Описание', imageUrl: 'assets/imagies/project1.png' },
    { title: 'Проект', description: 'Описание', imageUrl: 'assets/imagies/project1.png' },
    { title: 'Проект', description: 'Описание', imageUrl: 'assets/imagies/project1.png' },
    { title: 'Проект', description: 'Описание', imageUrl: 'assets/imagies/project1.png' },
  ];

  getProjects() {
    return this.projects;
  }
}
