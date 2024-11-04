import { Component, HostListener  } from '@angular/core';
import { AtomMenuComponent } from '../../atoms/atom-menu/atom-menu.component';
import { IconMenuComponent } from '../../../../../assets/images/icons/iconMenu/icon-menu.component';
import { IconCloseComponent } from '../../../../../assets/images/icons/iconClose/icon-close.component';

@Component({
  selector: 'organism-header',
  standalone: true,
  imports: [IconMenuComponent, IconCloseComponent, AtomMenuComponent],
  templateUrl: './organism-header.component.html',
  styleUrl: './organism-header.component.scss'
})
export class OrganismHeaderComponent {
  public scrolled = false;
  public showMenu = false;

  @HostListener('window:scroll', [])

  onScroll() {
    const offset = window.scrollY;
    this.scrolled = offset > 50;
  }

  //methods
  openMenu() {
    this.showMenu = !this.showMenu;
  }

}
