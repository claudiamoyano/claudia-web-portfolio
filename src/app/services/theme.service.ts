import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isBrowser: boolean;

  private readonly lightTheme = {
    '--background': '#F7F7F7',
    '--text': '#4F4F4F',
    '--sidebar-background': '#FFFF',
    '--colour-pop': '#DF1F66',
    '--colour-pop-hover': '#FF488B28',
    '--line-divider': '#DFDFDF',
    '--card-bg': '#FFFF',
    '--aura': '#F7F7F7',

    // -----------------------------------------------------
    // TAGS
    '--typescript-tag': '#3e47cc7a',
    '--typescript-bg-tag': '#3e47cc24',
    '--angular-tag': '#dd00007a',
    '--angular-bg-tag': '#dd000024',
    '--gsap-tag': '#0080267a',
    '--gsap-bg-tag': '#00802624',
    '--wordpress-tag': '#434baf7a',
    '--wordpress-bg-tag': '#434baf24',
    '--elementor-tag': '#a80fce7a',
    '--elementor-bg-tag': '#a80fce24',
  };

  private readonly darkTheme = {
    '--background': '#181818',
    '--text': '#E2E2E2',
    '--sidebar-background': '#232323',
    '--colour-pop': '#BB86FC',
    '--colour-pop-hover': '#BB86FC28',
    '--line-divider': '#e2e2e244',
    '--card-bg': 'rgba(35, 35, 35, 0.4)',
    '--aura': '#DFDFDF',

    // -----------------------------------------------------
    // TAGS
    '--typescript-tag': '#5c6eff',
    '--typescript-bg-tag': '#5c6eff1a',
    '--angular-tag': '#d43b3b',
    '--angular-bg-tag': '#d43b3b1a',
    '--gsap-tag': '#0ed478',
    '--gsap-bg-tag': '#00ff881a',
    '--wordpress-tag': '#6b7cff',
    '--wordpress-bg-tag': '#6b7cff1a',
    '--elementor-tag': '#d46bff',
    '--elementor-bg-tag': '#d46bff1a',
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.applySystemTheme();
  }

  private applySystemTheme() {
    if (this.isBrowser) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = prefersDark ? this.darkTheme : this.lightTheme;

      Object.entries(theme).forEach(([property, value]) => {
        document.documentElement.style.setProperty(property, value);
      });
    }
  }

  toggleDarkMode() {
    const currentTheme = document.documentElement.style.getPropertyValue('--background');
    const isDark = currentTheme === '#181818';
    const newTheme = !isDark ? this.darkTheme : this.lightTheme;

    Object.entries(newTheme).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  }

  getCurrentTheme(): boolean {
    if (this.isBrowser) {
      const background = document.documentElement.style.getPropertyValue('--background');
      return background === '#181818';
    }
    return false;
  }
}
