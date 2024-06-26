import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects = [
    { title: 'Полный круг услуг', description: 'Проводим полный цикл разработки – от концепции и дизайна до тестирования и поддержки.', imageUrl: 'assets/imagies/project1.png' },
    { title: 'Полный круг услуг', description: 'Проводим полный цикл разработки – от концепции и дизайна до тестирования и поддержки.', imageUrl: 'assets/imagies/project1.png' },
    { title: 'Полный круг услуг', description: 'Проводим полный цикл разработки – от концепции и дизайна до тестирования и поддержки.', imageUrl: 'assets/imagies/project1.png' },
    { title: 'Полный круг услуг', description: 'Проводим полный цикл разработки – от концепции и дизайна до тестирования и поддержки.', imageUrl: 'assets/imagies/project1.png' },
    { title: 'Полный круг услуг', description: 'Проводим полный цикл разработки – от концепции и дизайна до тестирования и поддержки.', imageUrl: 'assets/imagies/project1.png' },
    { title: 'Полный круг услуг', description: 'Проводим полный цикл разработки – от концепции и дизайна до тестирования и поддержки.', imageUrl: 'assets/imagies/project1.png' },
    { title: 'Полный круг услуг', description: 'Проводим полный цикл разработки – от концепции и дизайна до тестирования и поддержки.', imageUrl: 'assets/imagies/project1.png' },

  ];

  getProjects() {
    return this.projects;
  }
}
