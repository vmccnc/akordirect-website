import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {
  projects: Project[] = [];

  constructor(private readonly projectsService: ProjectsService){
    // this.fetchData()
    this.projects = this.projectsService.getProjects();
  };

  showAll:boolean = false;

  showAllItems(event: any) {
    event.preventDefault();
    this.showAll = true;
  }
  // fetchData(): void {
  //   this.projects = this.projectsService.getProjects();
   
  // }
  
}
