import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-menu',
  standalone: true,
  imports: [],
  templateUrl: './atom-menu.component.html',
  styleUrl: './atom-menu.component.scss'
})
export class AtomMenuComponent {
  @Input() showMenu: boolean = false;
}
