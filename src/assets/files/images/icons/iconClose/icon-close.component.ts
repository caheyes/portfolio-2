import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-close',
  standalone: true,
  imports: [],
  templateUrl: './icon-close.component.html',
})
export class IconCloseComponent {
  @Input() fill: string = '#000';
}
