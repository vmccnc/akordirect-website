import { Component, Input } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project!: Project;


}
