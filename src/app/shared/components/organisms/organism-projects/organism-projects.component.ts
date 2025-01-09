import { Component } from '@angular/core';
import { AtomProjectComponent } from '../../atoms/atom-project/atom-project.component';
import { ProjectsService } from '../../../../core/services/projects.service';

@Component({
  selector: 'organism-projects',
  standalone: true,
  imports: [AtomProjectComponent],
  templateUrl: './organism-projects.component.html',
  styleUrl: './organism-projects.component.scss'
})
export class OrganismProjectsComponent {
  public listProjects = this.projectsService.projects;

  constructor(private projectsService: ProjectsService) {
  }
}
