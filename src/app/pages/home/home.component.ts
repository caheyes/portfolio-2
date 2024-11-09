import { Component } from '@angular/core';
import { OrganismHeaderComponent } from '../../shared/components/organisms/organism-header/organism-header.component';
import { AboutComponent } from '../../shared/components/organisms/about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OrganismHeaderComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
