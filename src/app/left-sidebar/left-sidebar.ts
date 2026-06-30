import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../services/theme.service';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-left-sidebar',
  imports: [FormsModule, RouterModule, ToggleButtonModule, TranslatePipe],
  templateUrl: './left-sidebar.html',
  styleUrls: ['./left-sidebar.css'],
})

export class LeftSidebar implements OnInit {
  @Input() showSingleButton: boolean = false;

  // Animació de l'underline

  activeLink: string = '';

  setActive(link: string) {
      this.activeLink = link;
  }

  isActive(link: string): boolean {
      return this.activeLink === link;
  }
  
  toggleDarkOptions = [
    { icon: 'sol', name: 'Light', value: false },
    { icon: 'luna', name: 'Dark', value: true },
  ];

  darkMode: boolean = false;
  currentLang: string = 'ca';

  private themeService = inject(ThemeService);
  private translate = inject(TranslateService);

  constructor() {
    this.darkMode = this.themeService.getCurrentTheme();
  }

   ngOnInit() {
    const supportedLangs = ['ca', 'es', 'en'];
    const savedLang = typeof window !== 'undefined' ? window.localStorage.getItem('lang') : null;
    const langFromTranslate = this.translate.currentLang;

    if (savedLang && supportedLangs.includes(savedLang)) {
      this.currentLang = savedLang;
    } else if (typeof langFromTranslate === 'string') {
      this.currentLang = langFromTranslate;
    } else if (langFromTranslate && typeof langFromTranslate === 'object' && '()' in langFromTranslate) {
      this.currentLang = (langFromTranslate as any)() || 'ca';
    } else {
      this.currentLang = 'ca';
    }

    if (!supportedLangs.includes(this.currentLang)) {
      this.currentLang = 'ca';
    }

    this.translate.use(this.currentLang);
  }

  selectDarkMode() {
    this.themeService.toggleDarkMode();
    this.darkMode = this.themeService.getCurrentTheme();
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('lang', lang);
    }
  }

  // -----------------------------------------------

  // MENÚ
  menuOpen: boolean = false; 

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
        document.body.style.overflow = this.menuOpen ? 'hidden' : '';
    }

    closeMenu() {
        this.menuOpen = false;
        document.body.style.overflow = '';
    }
}