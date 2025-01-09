import { Component, Input } from '@angular/core';
import { IProjects } from '../../../../core/interfaces/IProjects.interface';

@Component({
  selector: 'atom-project',
  standalone: true,
  imports: [],
  templateUrl: './atom-project.component.html',
  styleUrl: './atom-project.component.scss'
})
export class AtomProjectComponent {
  @Input() project: IProjects | null = null;

  constructor () {
  }
}
