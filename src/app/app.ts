import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LeftSidebar } from './left-sidebar/left-sidebar';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LeftSidebar],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('Claudia-Portfolio');

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    const supportedLangs = ['ca', 'es', 'en'];
    const savedLang = typeof window !== 'undefined' ? window.localStorage.getItem('lang') : null;
    const browserLang = this.translate.getBrowserLang();
    const langToUse = savedLang && supportedLangs.includes(savedLang)
      ? savedLang
      : browserLang && supportedLangs.includes(browserLang)
      ? browserLang
      : 'ca';

    this.translate.use(langToUse);
  }
}