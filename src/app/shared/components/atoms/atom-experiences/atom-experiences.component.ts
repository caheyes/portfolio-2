import { Component } from '@angular/core';
//service
import { ExperiencesService } from '../../../../core/services/experiences.service';

@Component({
  selector: 'atom-experiences',
  standalone: true,
  imports: [],
  templateUrl: './atom-experiences.component.html',
  styleUrl: './atom-experiences.component.scss'
})
export class AtomExperiencesComponent {
  public listExperiences = this.experiencesService.experiences;

  constructor(private experiencesService: ExperiencesService) {}
}
