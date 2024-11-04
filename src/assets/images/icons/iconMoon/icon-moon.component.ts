import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-moon',
  standalone: true,
  imports: [],
  templateUrl: './icon-moon.component.html',
})
export class IconMoonComponent {
  @Input() fill: string = '#000';
}
