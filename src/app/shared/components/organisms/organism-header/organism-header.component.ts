import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DarkModeService } from '../../../../core/services/dark-mode.service';
//components
import { AtomMenuComponent } from '../../atoms/atom-menu/atom-menu.component';
import { IconMenuComponent } from '../../../../../assets/files/images/icons/iconMenu/icon-menu.component';
import { IconCloseComponent } from '../../../../../assets/files/images/icons/iconClose/icon-close.component';
import { IconSunComponent } from '../../../../../assets/files/images/icons/iconSun/icon-sun.component';
import { IconMoonComponent } from '../../../../../assets/files/images/icons/iconMoon/icon-moon.component';

@Component({
  selector: 'organism-header',
  standalone: true,
  imports: [IconMenuComponent, IconSunComponent, IconMoonComponent, IconCloseComponent, AtomMenuComponent],
  templateUrl: './organism-header.component.html',
  styleUrl: './organism-header.component.scss'
})
export class OrganismHeaderComponent implements OnInit {

  public scrolled = false;
  public showMenu = false;
  public darkMode = false;

  constructor(
    private darkModeService: DarkModeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
     // Apenas executa no navegador
    if (isPlatformBrowser(this.platformId)) {
      this.darkModeService.darkMode$.subscribe((isDark) => {
        this.darkMode = isDark;
        document.body.classList.toggle('dark-mode', isDark);
      })
    }
  }

  @HostListener('window:scroll', [])

  onScroll() {
    const offset = window.scrollY;
    this.scrolled = offset > 50;
  }

  //methods
  openMenu() {
    this.showMenu = !this.showMenu;
  }

  activeDarkMode() {
    this.darkModeService.setDarkMode(!this.darkMode);
  }

  //util
  getFillColor(): string {
    return this.scrolled || this.showMenu || this.darkMode ? '#fff' : '#000';
  }

}
