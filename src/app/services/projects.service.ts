import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects = [
    { title: 'PROJECTS.LIST.1.NAME', description: 'PROJECTS.LIST.1.DESC', imageUrl: 'assets/imagies/project1.jpg', url: 'https://sofantastica.pl/' },
    { title: 'PROJECTS.LIST.2.NAME', description: 'PROJECTS.LIST.2.DESC', imageUrl: 'assets/imagies/project2.jpg', url: 'https://salivonchyk.pl/' },
    { title: 'PROJECTS.LIST.3.NAME', description: 'PROJECTS.LIST.3.DESC', imageUrl: 'assets/imagies/project3.jpg', url: 'https://www.insaturbo4x4.com/' },
    { title: 'PROJECTS.LIST.4.NAME', description: 'PROJECTS.LIST.4.DESC', imageUrl: 'assets/imagies/project4.jpg', url: 'https://www.get-together.events/' },
    { title: 'PROJECTS.LIST.5.NAME', description: 'PROJECTS.LIST.5.DESC', imageUrl: 'assets/imagies/project5.jpg', url: 'https://english-katt.vercel.app/' },
    { title: 'PROJECTS.LIST.6.NAME', description: 'PROJECTS.LIST.6.DESC', imageUrl: 'assets/imagies/project6.jpg', url: '' },
    { title: 'PROJECTS.LIST.7.NAME', description: 'PROJECTS.LIST.7.DESC', imageUrl: 'assets/imagies/project7.jpg', url: '' },
    { title: 'PROJECTS.LIST.8.NAME', description: 'PROJECTS.LIST.8.DESC', imageUrl: 'assets/imagies/project8.jpg', url: '' },
    { title: 'PROJECTS.LIST.9.NAME', description: 'PROJECTS.LIST.9.DESC', imageUrl: 'assets/imagies/project9.jpg', url: '' },
  ];

  getProjects() {
    return this.projects;
  }
}
