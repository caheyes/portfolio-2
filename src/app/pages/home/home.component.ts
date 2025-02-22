import { Component } from '@angular/core';
//components
import { OrganismHeaderComponent } from '../../shared/components/organisms/organism-header/organism-header.component';
import { OrganismAboutComponent } from '../../shared/components/organisms/organism-about/organism-about.component';
import { OrganismExperiencesComponent } from '../../shared/components/organisms/organism-experiences/organism-experiences.component';
import { OrganismContactComponent } from '../../shared/components/organisms/organism-contact/organism-contact.component';
import { OrganismProjectsComponent } from '../../shared/components/organisms/organism-projects/organism-projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OrganismHeaderComponent, OrganismAboutComponent, OrganismExperiencesComponent, OrganismContactComponent, OrganismProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
