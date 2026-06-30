import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
//import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      }),
    ),
    //provideClientHydration(withEventReplay()),
    //provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()),

    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),

    // -----------------------------------------------------
    // TRADUCCIONS
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/public/i18n/',
        suffix: '.json',
      }),
      fallbackLang: 'ca',
      lang: 'ca',
    }),
  ],
};
