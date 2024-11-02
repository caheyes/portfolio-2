import { Component } from '@angular/core';
import { OrganismHeaderComponent } from '../../shared/components/organisms/organism-header/organism-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OrganismHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
