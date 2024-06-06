import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects = [
    { title: 'Project 1', description: 'Description for project 1', imageUrl: 'path/to/image1.jpg' },
    { title: 'Project 2', description: 'Description for project 2', imageUrl: 'path/to/image2.jpg' },
    { title: 'Project 3', description: 'Description for project 3', imageUrl: 'path/to/image3.jpg' },
    { title: 'Project 4', description: 'Description for project 4', imageUrl: 'path/to/image4.jpg' },
    { title: 'Project 5', description: 'Description for project 5', imageUrl: 'path/to/image5.jpg' },
    { title: 'Project 6', description: 'Description for project 6', imageUrl: 'path/to/image6.jpg' },
  ];

  getProjects() {
    return this.projects;
  }
}
