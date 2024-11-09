import { Component } from '@angular/core';
import { OrganismHeaderComponent } from '../../shared/components/organisms/organism-header/organism-header.component';
import { OrganismAboutComponent } from '../../shared/components/organisms/organism-about/organism-about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OrganismHeaderComponent, OrganismAboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
