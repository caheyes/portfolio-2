import { Component } from '@angular/core';
import { AtomProjectComponent } from '../../atoms/atom-project/atom-project.component';

@Component({
  selector: 'organism-projects',
  standalone: true,
  imports: [AtomProjectComponent],
  templateUrl: './organism-projects.component.html',
  styleUrl: './organism-projects.component.scss'
})
export class OrganismProjectsComponent {

}
