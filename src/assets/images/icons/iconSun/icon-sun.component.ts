import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-sun',
  standalone: true,
  imports: [],
  templateUrl: './icon-sun.component.html',
})
export class IconSunComponent {
  @Input() fill: string = '#000';
}
