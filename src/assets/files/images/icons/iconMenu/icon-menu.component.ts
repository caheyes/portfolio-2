import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-menu',
  standalone: true,
  imports: [],
  templateUrl: './icon-menu.component.html',
})
export class IconMenuComponent {
  @Input() stopColor: string = '#000';
}
