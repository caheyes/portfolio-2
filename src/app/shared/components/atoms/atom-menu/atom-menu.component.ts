import { Component, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'atom-menu',
  standalone: true,
  imports: [],
  templateUrl: './atom-menu.component.html',
  styleUrl: './atom-menu.component.scss'
})
export class AtomMenuComponent {
  @Input() showMenu: boolean = false;

  constructor(
    private viewportScroller: ViewportScroller
  ) {}

  scrollTo(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
