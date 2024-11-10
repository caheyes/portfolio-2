import { Component } from '@angular/core';
//components
import { AtomExperiencesComponent } from '../../atoms/atom-experiences/atom-experiences.component';

@Component({
  selector: 'organism-experiences',
  standalone: true,
  imports: [AtomExperiencesComponent],
  templateUrl: './organism-experiences.component.html',
  styleUrl: './organism-experiences.component.scss'
})
export class OrganismExperiencesComponent {

}
